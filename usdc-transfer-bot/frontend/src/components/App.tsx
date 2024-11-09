import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo-client';
import { TransferDashboard } from './components/TransferDashboard';

function App() {
  return (
    <ApolloProvider client={client}>
      <TransferDashboard />
    </ApolloProvider>
  );
}

export default App;