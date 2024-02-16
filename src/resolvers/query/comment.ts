import { GraphQLContext } from "../../context";

export const commentResolver = async (
  parent: unknown,
  args: { id: string },
  context: GraphQLContext
) => {
  return context.prisma.comment.findUnique({
    where: { id: parseInt(args.id) },
  });
};
