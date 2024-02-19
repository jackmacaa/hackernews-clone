import { GraphQLContext } from "../../context";
import { QueryResolvers } from "../../generated/graphql";
import { transformToLinks } from "../../transformers";
import { applyTakeConstraints } from "../../util";

export const feedResolver: QueryResolvers["feed"] = async (
  _root,
  args,
  context: GraphQLContext,
  _info,
) => {
  if (!args.skip) {
    args.skip = 0;
  }
  const { filterNeedle, skip, take } = args;

  const where = filterNeedle
    ? {
        OR: [
          {
            description: {
              contains: filterNeedle,
            },
          },
          { url: { contains: filterNeedle } },
        ],
      }
    : {};

  const defaultTakeValues = applyTakeConstraints({
    min: 1,
    max: 50,
    value: take ?? 30,
  });

  const feeds = await context.prisma.link.findMany({
    where,
    skip,
    take: defaultTakeValues,
  });

  return transformToLinks(feeds);
};
