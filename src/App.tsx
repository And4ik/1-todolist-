import React from 'react';
import './App.css';
import TodoList from "./TodoList";

// JSX.Element чтобы проследить что в ретурне действительно лежит JSX
function App(): JSX.Element {
    return (
        <div className="App">
            <TodoList title={"What to read"}/>
            <TodoList title={"What to bue"}/>
            <TodoList title={"What to learn"}/>
            <TodoList title={"What"}/>
        </div>
    );
}

export default App;
