import React, { useRef } from "react";
import "./CreateTodo.css";

type NewTodoProps = {
  onCreate: (todoText: string) => void;
};

const CreateTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    props.onCreate(enteredText);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
        />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default CreateTodo;
