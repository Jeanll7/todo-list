import TodoTask from "./components/TodoTask/TodoTask";
import { useState } from "react";
import "./styles/styles.css";

import { ITask } from "./Interfaces";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addTask(): void {
    if (task === "") {
      toast.error("Digite alguma tarefa");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);
      const newTask = { id: idRandom(9999), nameTask: task };

      setTodoList([...todoList, newTask]);
      toast.success("Tarefa cadastrada com sucesso!");
      setTask("");
    }
  }

  const deleteTask = (taskIdToDelete: number): void => {
    setTodoList(todoList.filter((taskName) => taskName.id !== taskIdToDelete));
    toast.success("Tarefa deletada com sucesso!");
  };

  return (
    <div className="App">
      <ToastContainer autoClose={2500} pauseOnHover={false} />

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
        <TodoTask key={key} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
