import { useEffect, useState } from "react";
import s from "./ModalWindow.module.css";

export const ModalWindow = ({ onHandleCloseModal, onRename, onAddModalValue }) => {
 const [title, setTitle] = useState('')
 const [body, setBody] = useState('')
 const [author, setAuthor] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onHandleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onHandleCloseModal]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onHandleCloseModal();
    }
  };

  const handleSave = () => {
    onRename(inputText);
    onHandleCloseModal();
  };

  const handlerAddForm = () => {
    onAddModalValue({title, body, author})
  }

  return (
    <div
      className={s.modal}
      onClick={handleClickOutside}
    >
      <div className={s.modal_content}>
        <span
          className={s.close}
          onClick={onHandleCloseModal}
        >
          &times;
        </span>
        <input
          type="text"
          className={s.input}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          className={s.input}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter text"
        />
        <input
          type="text"
          className={s.input}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
        />
        <button
          className={s.btn_add}
          onClick={handlerAddForm}
        >
          Add
        </button>
      </div>
    </div>
  );
};
