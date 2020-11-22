import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NhostApolloProvider } from '@nhost/react-apollo';

ReactDOM.render(
  <React.StrictMode>
    <NhostApolloProvider
      gqlEndpoint='https://hasura-da84f022.nhost.app/v1/graphql
'
    >
      <App />
    </NhostApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
