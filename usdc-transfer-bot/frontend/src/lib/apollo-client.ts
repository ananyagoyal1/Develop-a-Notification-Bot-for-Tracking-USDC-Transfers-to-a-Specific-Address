// frontend/src/lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'YOUR_SUBGRAPH_URL',
  cache: new InMemoryCache(),
});