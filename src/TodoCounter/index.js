import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total
  } = React.useContext(TodoContext)
  
    return (
      <div>
        {total === completed ? (
          <h1 className="TotalCounter"
          >Has completado todos los ToDos
          </h1>
        ) : (
          <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
          </h1>
        )}
      </div>
    );

 }
  

  export { TodoCounter };