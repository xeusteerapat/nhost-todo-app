import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import { auth } from 'utils/nhost';

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        gqlEndpoint={process.env.REACT_APP_NHOST_HASURA_GRAPHQL}
      >
        <App />
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
