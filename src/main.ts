import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { createContext } from "./context";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

const generatedTypeDefs = loadSchemaSync("**/hacker-news.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: generatedTypeDefs,
});

function main() {
  const yoga = createYoga({
    schema,
    context: createContext,
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
