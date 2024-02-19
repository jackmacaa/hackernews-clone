import { commentResolver } from "./query/comment";
import { commentsResolver } from "./query/link/comments";
import { feedResolver } from "./query/feed";
import { infoResolver } from "./query/info";
import { linkResolver } from "./query/link";
import { postLinkResolver } from "./mutation/post-link";
import { postLinkOnCommentResolver } from "./mutation/post-link-on-comment";
import { Resolvers } from "../generated/graphql";

export const resolvers: Resolvers = {
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
