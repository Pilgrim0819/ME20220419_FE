import { Modal } from '@material-ui/core';
import { AiOutlinePlus } from 'react-icons/ai';
import React, { useState } from 'react';

const AddTodo = () => {
  const [modal, showModal] = useState(false);

  return (
    <>
      <Modal
        open={modal}
        onClose={() => showModal(false)}
        className="todo-modal"
      >
        <div className="modal-inner">
          <input className="" />
        </div>
      </Modal>

      <span className="add-todo">
        <AiOutlinePlus onClick={() => showModal(true)} title="add-todo" />
      </span>
    </>
  );
};

export default AddTodo;
