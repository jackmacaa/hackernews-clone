import { Link } from "@prisma/client";
import { GraphQLContext } from "../context";
import { postLinkResolver } from "./mutation/post-link";
import { postLinkOnCommentResolver } from "./mutation/post-link-on-comment";
import { commentResolver } from "./query/comment";
import { feedResolver } from "./query/feed";
import { infoResolver } from "./query/info";
import { linkResolver } from "./query/link";
import { commentsResolver } from "./query/link/comments";

export const resolvers = {
  Query: {
    info: infoResolver,
    feed: feedResolver,
    comment: commentResolver,
    link: linkResolver,
  },
  Mutation: {
    postLink: postLinkResolver,
    postCommentOnLink: postLinkOnCommentResolver,
  },
  Link: {
    comments: commentsResolver,
  },
};
