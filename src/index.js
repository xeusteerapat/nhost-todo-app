import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NhostApolloProvider } from '@nhost/react-apollo';

ReactDOM.render(
  <React.StrictMode>
    <NhostApolloProvider
      gqlEndpoint={process.env.REACT_APP_NHOST_HASURA_GRAPHQL}
    >
      <App />
    </NhostApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
