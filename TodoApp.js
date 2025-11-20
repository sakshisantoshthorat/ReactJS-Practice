import React, { useEffect, useState } from 'react';
import './App.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // Load from localStorage
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem("todos"));
            if (Array.isArray(saved)) setTodos(saved);
        } catch (error) {
            console.error("Failed to load todos", error);
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false
        };

        setTodos(prev => [...prev, newTodo]);
        setInput("");
    };

    const toggleComplete = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div className='container'>
            <h2 style={{textAlign:"center"}}>Todo App</h2>
            <input
                type="text"
                value={input}
                placeholder="Enter a todo"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                style={{ padding: "8px" }}
            />

            <button onClick={addTodo} className='btn'>Add</button>

            <ol>
                {todos.map(todo => (
                    <li key={todo.id} style={{ marginTop: 10 }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        <span
                            style={{
                                marginLeft: 8,
                                cursor: "pointer",
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "gray" : "brown"
                            }}
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{ marginLeft: 10 }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoApp;
