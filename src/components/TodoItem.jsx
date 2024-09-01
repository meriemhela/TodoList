import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleComplete,
  deleteTodo,
  updateTodo,
} from "../js/features/todoSlice";
import styles from "../modules/TodoItem.module.css"; // Import CSS module

const TodoItem = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(title);

  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const handleEditClick = () => {
    if (isEditing) {
      dispatch(updateTodo({ id, title: editText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`${styles.item} ${completed && styles.completed}`}>
      <div className={styles.itemContent}>
        <span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={handleCompleteClick}
          />
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEditClick}
              className={styles.editInput}
            />
          ) : (
            title
          )}
        </span>
      </div>
      <button onClick={handleEditClick} className={styles.editButton}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={handleDeleteClick} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
