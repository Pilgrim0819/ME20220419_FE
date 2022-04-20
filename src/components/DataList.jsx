import React from 'react';
import AddTodo from './AddTodo';
import axios from '../api';

import TodoCard from './TodoCard';

const DataList = ({ data, removeTodoFromList }) => {
  if (data.length < 1) {
    return null;
  }

  const handleDelete = async id => {
    const body = { id: id };
    const resp = await axios.delete(
      `${process.env.REACT_APP_API_HOST}/todos`,
      body
    );

    removeTodoFromList(id);

    if (resp?.status !== 200) {
      alert('Something Went Wrong');
    }
  };

  return (
    <div className="list-container">
      <AddTodo />

      {data.map(item => (
        <TodoCard
          key={item.id}
          title={item.title}
          body={item.body}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default DataList;
