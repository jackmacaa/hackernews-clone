import { GraphQLContext } from "../../context";

export const postLinkResolver = async (
  parent: unknown,
  args: { description: string; url: string },
  context: GraphQLContext
) => {
  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
    },
  });
  return newLink;
};
