import { Link } from "@prisma/client";
import { GraphQLContext } from "../../../context";

export const commentsResolver = async (
  parent: Link,
  args: {},
  context: GraphQLContext
) => {
  return context.prisma.comment.findMany({
    where: {
      linkId: parent.id,
    },
  });
};
