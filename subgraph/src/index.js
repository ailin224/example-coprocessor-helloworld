import fs from "fs";
import path from "path";
import DataLoader from 'dataloader';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { parse } from "graphql";
import resolvers from "./resolvers.js";
import { createVideosWorkflowExecutor } from "./workflowExecutor.js";

const typeDefs = parse(
  fs
    .readdirSync(path.resolve("src"))
    .filter((file) => path.extname(file) === ".graphql")
    .map((file) => fs.readFileSync(path.resolve("src", file), "utf-8"))
    .join("\n")
);

const consoleLogPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  requestDidStart(requestContext) {
    console.log('Request started! Query:\n' +
      requestContext.request.query);
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  plugins: [consoleLogPlugin],
});

const videoDataloader = new DataLoader(createVideosWorkflowExecutor);

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
  context: () => {
    return {
      videoDataloader,
    };
  }
});

console.log(`🚀 Subgraph ready at: ${url}`);
