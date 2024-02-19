import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { GraphQLContext } from "../../context";
import { GraphQLError } from "graphql";
import { parseIntSafe } from "../../util";
import { MutationResolvers } from "../../generated/graphql";

export const postLinkOnCommentResolver: MutationResolvers["postCommentOnLink"] =
  async (_root, args, context: GraphQLContext) => {
    const { linkId, body } = args;
    const parsedLinkId = parseIntSafe(linkId);

    if (parsedLinkId === null) {
      return Promise.reject(
        new GraphQLError(
          `Cannot post comment on non-existing link with id '${linkId}'.`,
        ),
      );
    }

    const comment = await context.prisma.comment
      .create({
        data: {
          body: body,
          linkId: parsedLinkId,
        },
      })
      .catch((error: unknown) => {
        if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === "P2003"
        ) {
          return Promise.reject(
            new GraphQLError(
              `Cannot post comment on non-existing link with id '${linkId}'.`,
            ),
          );
        }
        return Promise.reject(error);
      });

    return comment;
  };
