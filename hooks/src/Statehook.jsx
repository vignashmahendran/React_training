import { useEffect, useReducer, useRef, useState } from "react";

function Statehook() {
  const [change, setchange] = useState([false]);
  const ref = useRef();

  const [todo, dispatch] = useReducer(task, []);
  function task(state, action) {
    if (action.type[0] == "true") {
      return [...state, { task: action.payload, status: "complete" }];
    } else {
      return [...state, { task: action.payload, status: "pending" }];
    }
  }
  useEffect(() => {
    if (ref.current.value != "") {
      dispatch({ type: change, payload: ref.current.value });
      ref.current.value = "";
    }
    console.log(todo);
  }, [change]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setchange([e.target.status.value]);
          
        }}
      >
        <input type="text" ref={ref} />
        <br />
        <input type="radio" name="status" value={true} />
        complete
        <input type="radio" name="status" value={false} />
        pending
        <br />
        <button type="submit">add</button>
      </form>
      <div>
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              {item.task}({item.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Statehook;
