import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { GraphQLContext } from "../../context";
import { GraphQLError } from "graphql";

export const postLinkOnCommentResolver = async (
  parent: unknown,
  args: { linkId: string; body: string },
  context: GraphQLContext
) => {
  const comment = await context.prisma.comment
    .create({
      data: {
        body: args.body,
        linkId: parseInt(args.linkId),
      },
    })
    .catch((err: unknown) => {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2003"
      ) {
        return Promise.reject(
          new GraphQLError(
            `Cannot post comment on non-existing link with id '${args.linkId}'.`
          )
        );
      }
      return Promise.reject(err);
    });

  return comment;
};
