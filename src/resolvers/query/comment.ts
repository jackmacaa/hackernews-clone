import { GraphQLContext } from "../../context";
import { QueryResolvers } from "../../generated/graphql";

export const commentResolver: QueryResolvers["comment"] = async (
  _root,
  args,
  context: GraphQLContext,
) => {
  return context.prisma.comment.findUnique({
    where: { id: parseInt(args.id) },
  });
};
