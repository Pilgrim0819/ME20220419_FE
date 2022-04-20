import React, { useEffect, useRef } from 'react';

import { BsTrash } from 'react-icons/bs';

const TodoCard = ({ title, body, handleDelete }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = body;
    }
  }, [body]);

  return (
    <div className="list-item bad">
      <div className="list-item-delete" onClick={handleDelete}>
        <BsTrash />
      </div>

      <div className="list-item-title">
        Title of todo: <span>{title}</span>
      </div>

      <div className="list-item-body" ref={contentRef} />
    </div>
  );
};

export default TodoCard;
