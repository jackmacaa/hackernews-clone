import { GraphQLContext } from "../../context";
import { QueryResolvers } from "../../generated/graphql";
import { transformToLinks } from "../../transformers";

export const linkResolver: QueryResolvers["link"] = async (
  _root,
  args,
  context: GraphQLContext,
) => {
  const link = await context.prisma.link.findUniqueOrThrow({
    where: {
      id: parseInt(args.id),
    },
  });

  return transformToLinks([link])[0];
};
