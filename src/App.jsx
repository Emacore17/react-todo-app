import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => setName(e.target.value);

  const addTodo = () => {
    if (name === "") {
      setError(true);
    } else {
      const newTodos = [
        ...todos,
        {
          name: name,
          isDone: false,
        },
      ];

      setTodos(newTodos);
      setName("");
      setError(false);
    }
  };

  const changeDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, currentIndex) => currentIndex !== index);
    setTodos(newTodos);
  };

  return (
    <main>
      <h1 className="font-bold">My Todo APP</h1>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={name}
        className="border-2 border-black"
      />
      <button className="bg-yellow-400" onClick={addTodo}>
        ADD
      </button>
      {error && <p className="text-red-500">Il todo deve essere compilato</p>}
      {todos &&
        todos.map((todo, index) => (
          <div key={index} className="flex">
            <p
              onClick={() => changeDone(index)}
              className={
                todo.isDone ? "cursor-pointer line-through" : "cursor-pointer"
              }
            >
              {todo.name}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 ml-2"
            >
              ELIMINA
            </button>
          </div>
        ))}
    </main>
  );
}

export default App;
