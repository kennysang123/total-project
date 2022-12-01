import React from "react";
import { useStore, actions } from "../../store";

export default function Reducer() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  console.log("todoInput:", todoInput);
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };
  console.log(todos);
  return (
    <>
      <div>
        <input
          value={todoInput}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}
