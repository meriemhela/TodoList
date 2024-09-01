import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../js/features/todoSlice";
import styles from "../modules/AddTodoForm.module.css"; // Import CSS module

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + value);
    dispatch(addTodo({ title: value }));
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
