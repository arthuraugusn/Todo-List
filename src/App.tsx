import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1>Lista de Tarefas</h1>
      <div className="flex flex-col w-full gap-7">
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
        <TodoForm />
      </div>
    </main>
  );
};

export default App;
