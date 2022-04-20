import { Modal } from "@material-ui/core";
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import getToken from "../utils/getToken";

const AddTodo = () => {
    const [modal, showModal] = useState(false);
    const token = getToken();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const title = ev.target[0].value;
        const todoBody = ev.target[1].value;

        if (!title || !todoBody) {
            return alert('Provide some content please!');
        }

        const headers = { headers: { Authorization: `Bearer ${token}`}};
        const body = { title: title, body: todoBody };

        const resp = await axios.post(`${process.env.REACT_APP_API_HOST}/todos`, body, headers);

        if (resp?.status === 201) {
            showModal(false);
        } else {
            alert('Something went wrong!')
        }
    }

    return (
      <>
        <Modal open={modal} onClose={() => showModal(false)} className="todo-modal">
          <div className="modal-inner">
              <div className="modal-title">Add Todo</div>
              <form onSubmit={handleSubmit} className="form" >
                  <input name="todo-name" placeholder="Title of todo" />
                  <input name="todo-content" placeholder="Body of todo" />

                  <button className="todo-submit" type="submit">Submit</button>
              </form>
            </div>
          </Modal>

        <span className="add-todo">
          <AiOutlinePlus onClick={() => showModal(true)} title="add-todo" />
        </span>
      </>
  );
};

export default AddTodo;
