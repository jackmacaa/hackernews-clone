import { Link } from "../generated/graphql";

export const transformToLinks = (
  data: {
    id: number;
    createdAt: Date;
    description: string;
    url: string;
    postedById: number | null;
  }[],
): Link[] => {
  return data.map((link) => {
    const { id, createdAt, description, postedById, url } = link;

    return {
      id,
      createdAt: createdAt.toDateString(),
      comments: [],
      description,
      url,
      postedById,
    };
  });
};
