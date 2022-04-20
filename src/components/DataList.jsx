import React from 'react';
import AddTodo from './AddTodo';
import { BsTrash } from 'react-icons/bs';
import getToken from '../utils/getToken';
import axios from '../api';

import TodoCard from './TodoCard';

const DataList = ({ data }) => {
  const token = getToken();

  if (data.length < 1) {
    return null;
  }

  const handleDelete = async id => {
    const body = { id: id };
    const resp = await axios.delete(
      `${process.env.REACT_APP_API_HOST}/todos`,
      body
    );
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
