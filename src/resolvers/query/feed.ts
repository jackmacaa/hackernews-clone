import { GraphQLContext } from "../../context";
import { applyTakeConstraints } from "../../util";

export const feedResolver = (
  parent: unknown,
  args: { filterNeedle?: string; skip?: number; take?: number },
  context: GraphQLContext
) => {
  const { filterNeedle, skip, take } = args;
  const where = filterNeedle
    ? {
        OR: [
          { description: { contains: filterNeedle } },
          { url: { contains: filterNeedle } },
        ],
      }
    : {};

  const defaultTakeValues = applyTakeConstraints({
    min: 1,
    max: 50,
    value: take ?? 30,
  });

  return context.prisma.link.findMany({
    where,
    skip,
    take: defaultTakeValues,
  });
};
