import { GraphQLContext } from "../../context";

export const feedResolver = (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  return context.prisma.link.findMany();
};
