import React from 'react';
import AddTodo from './AddTodo';
import { BsTrash } from 'react-icons/bs';
import getToken from '../utils/getToken';
import axios from 'axios';

const DataList = ({ data }) => {
  const token = getToken();

  if (data.length < 1) {
    return null;
  }

  const handleDelete = async id => {
    const body = { id: id };
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const resp = await axios.delete(
      `${process.env.REACT_APP_API_HOST}/todos`,
      body,
      headers
    );
  };

  return (
    <div className="list-container">
      <AddTodo />

      {data.map(item => (
        <div className="list-item" key={item.id}>
          <div
            className="list-item-delete"
            onClick={() => handleDelete(item.id)}
          >
            <BsTrash />
          </div>

          <div className="list-item-title">
            Title of todo: <span>{item.title}</span>
          </div>

          <div
            className="list-item-body"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        </div>
      ))}
    </div>
  );
};

export default DataList;
