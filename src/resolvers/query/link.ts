import { GraphQLContext } from "../../context";

export const linkResolver = (
  parent: unknown,
  args: { id: string },
  context: GraphQLContext
) => {
  try {
    return context.prisma.link.findUniqueOrThrow({
      where: {
        id: parseInt(args.id),
      },
    });
  } catch (error) {
    throw new Error(`Link of ID: ${args.id}, could not be found`);
  }
};
