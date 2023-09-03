import { ITodo } from "../interface/ITodo";

const Todo = (todo: ITodo) => {
  return (
    <div key={todo.id}>
      <div className="flex gap-2">
        <p>{todo.text}</p>
        <p>{todo.category}</p>
      </div>
      <div>
        <button className="bg-red-300">Confirmar</button>
        <button className="bg-red-700">x</button>
      </div>
    </div>
  );
};

export default Todo;
