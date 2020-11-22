import React from 'react';
import { useSubscription } from '@apollo/client';
import gql from 'graphql-tag';
import TodoForm from 'TodoForm';

const GET_TODOS = gql`
  subscription {
    todos {
      id
      created_at
      name
      is_completed
    }
  }
`;

function App() {
  const { data, loading } = useSubscription(GET_TODOS);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Nhost Todo App</h1>
      <TodoForm />
      {!data ? (
        'No todos'
      ) : (
        <ul>
          {data.todos.map(todo => {
            return <li key={todo.id}>{todo.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
