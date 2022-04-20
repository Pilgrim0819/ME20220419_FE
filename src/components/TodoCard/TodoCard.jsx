import React, { useEffect, useRef } from 'react';

import { BsTrash } from 'react-icons/bs';

const TodoCard = ({ title, body, handleDelete }) => (
  <div className="list-item">
    <div className="list-item-delete" onClick={handleDelete}>
      <BsTrash />
    </div>

    <div className="list-item-title">
      Title of todo: <span>{title}</span>
    </div>

    <div className="list-item-body">{body}</div>
  </div>
);

export default TodoCard;
