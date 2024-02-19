import { GraphQLContext } from "../../../context";
import { LinkResolvers } from "../../../generated/graphql";

export const commentsResolver: LinkResolvers["comments"] = async (
  parent,
  _args,
  context: GraphQLContext,
) => {
  const comments = await context.prisma.comment.findMany({
    where: {
      linkId: parent.id,
    },
  });

  return comments;
};
