import TodoTask from "./components/TodoTask/TodoTask";
import { useState } from "react";
import "./styles/styles.css";
import { ITask } from "./Interfaces";

function App() {
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addTask() {
    const idRandom = (num: number) => Math.floor(Math.random() * num);

    const newTask = { id: idRandom(9999999), nameTask: task };

    setTodoList([...todoList, newTask]);
  }

  return (
    <div className="App">
      <header>
        <h2>Lists</h2>

        <input
          type="text"
          autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className="input"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit" onClick={addTask} className="btn-header">
          Adicionar Task
        </button>
      </header>

      <div className="line"></div>

      {todoList.map((task, key) => (
        <TodoTask key={key} task={task} />
      ))}
    </div>
  );
}

export default App;
