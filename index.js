const { createGraphQLSchema } = require("openapi-to-graphql");
const { ApolloServer } = require("apollo-server");

(async () => {
  // Import spec
  const oas = require("specification.json");

  // Create schema
  const { schema } = await createGraphQLSchema(oas);

  // Set up serverr
  const server = new ApolloServer({
    schema,
  });

  // Start server
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
