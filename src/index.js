import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import AuthGate from './AuthGate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import { auth } from 'utils/nhost';

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        gqlEndpoint={process.env.REACT_APP_NHOST_HASURA_GRAPHQL}
      >
        <Router>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <AuthGate>
              <Route exact path='/'>
                <App />
              </Route>
            </AuthGate>
          </Switch>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
