require( 'dotenv' ).config()
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./src/schema');
const GhibliAPI = require('./src/dataSource');

const resolvers = {
  Query: {
    getFilms: async (_source, _args, { dataSources }) =>
      await dataSources.ghibliAPI.getFilms(),
    getPeople: (_source, _args, { dataSources }) =>
      dataSources.ghibliAPI.getPeople(),
    getLocations: (_source, _args, { dataSources }) =>
      dataSources.ghibliAPI.getLocations(),
    getSpecies: (_source, _args, { dataSources }) =>
      dataSources.ghibliAPI.getSpecies(),
    getVehicles: (_source, _args, { dataSources }) =>
      dataSources.ghibliAPI.getVehicles(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ghibliAPI: new GhibliAPI(),
  }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
});

server.listen().then(({ url }) => console.log(`🚀  server running on ${url}`));
