import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const INSERT_TODO = gql`
  mutation($todo: todos_insert_input!) {
    insert_todos(objects: [$todo]) {
      affected_rows
    }
  }
`;

const TodoForm = () => {
  const [insertTodo] = useMutation(INSERT_TODO);
  const [todoName, setTodoName] = useState('');

  const handleChange = e => {
    setTodoName(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await insertTodo({
        variables: {
          todo: {
            name: todoName,
          },
        },
      });
    } catch (err) {
      console.error(err);
      return alert('Error on creating todo');
    }

    alert('Todo created');
    setTodoName('');
  };

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add new todo'
          value={todoName}
          onChange={handleChange}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
