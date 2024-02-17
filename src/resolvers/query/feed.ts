import { GraphQLContext } from "../../context";

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

  return context.prisma.link.findMany({
    where,
    skip,
    take,
  });
};
