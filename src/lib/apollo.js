import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl510ozy31aou01uegz9tco28/master',
    cache: new InMemoryCache()
})