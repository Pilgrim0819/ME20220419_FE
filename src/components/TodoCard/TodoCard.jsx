import React from 'react';

import { BsTrash } from 'react-icons/bs';

const TodoCard = ({ title, body, handleDelete }) => {
  return (
    <div className="list-item">
      <div className="list-item-delete" onClick={handleDelete}>
        <BsTrash />
      </div>

      <div className="list-item-title">
        Title of todo: <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </div>

      <div
        className="list-item-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default TodoCard;
