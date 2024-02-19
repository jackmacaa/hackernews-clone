import { QueryResolvers } from "../../generated/graphql";

export const infoResolver: QueryResolvers["info"] = () =>
  `This is the API of a Hackernews Clone`;
