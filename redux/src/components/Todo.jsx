import React from "react";
import { Button, Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const input=useSelector((state) => state.input.input);

  return (
    <table
      style={{
        border: "1px solid black",
        borderCollapse: "collapse",
        overflow: "auto",
        padding: 10,
      }}
    >
      {todos.map((todo, index) => (
        <tr>
          <td
            style={{
              padding: 20,
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            {index}
          </td>
          <td
            style={{
              padding: 20,
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            {todo.text}
          </td>
          <td
            style={{
              padding: 5,
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            {
              <Button
                style={{ marginLeft: 20 }}
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                delete
              </Button>
            }
          </td>
          <td
            style={{
              padding: 5,
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            {
              <Button
                style={{ marginLeft: 20 }}
                onClick={() => {
                  dispatch(
                    editTodo({
                      id: todo.id,
                      text:input ,
                    })
                  );
                }}
              >
                update
              </Button>
            }
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Todo;
