import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { createContext } from "./context";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefinitions } from "./schema/type-defs";
import { resolvers } from "./resolvers";

const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});

function main() {
  const yoga = createYoga({ schema, context: createContext });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
