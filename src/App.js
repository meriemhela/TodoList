import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import styles from "./modules/App.module.css";

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Todo List</h1>
        <div className={styles.content}>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
