import { GraphQLContext } from "../../context";
import { MutationResolvers } from "../../generated/graphql";
import { transformToLinks } from "../../transformers";

export const postLinkResolver: MutationResolvers["postLink"] = async (
  _root,
  args,
  context: GraphQLContext,
) => {
  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
    },
  });

  return transformToLinks([newLink])[0];
};
