import React from 'react';
import './App.css';
import TodoList from "./TodoList";

// JSX.Element чтобы проследить что в ретурне действительно лежит JSX

// создадим тип описывающий одну таску,это будет обьект( у каждой такски будет id-число, title-название, idDone - cтатус (выполнено или нет)
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
function App(): JSX.Element {
    // в переменной будет лежать массив элементов типа TaskType. Cоздается набор тасок для одного тудулиста
    const tasks: TaskType[] = [
        {id: 1, title:"HTML & CSS", isDone: true},
        {id: 2, title:"CSS & SCSS", isDone: true},
        {id: 3, title:"ES6/TS", isDone: false},
    ]
    return (
        <div className="App">
            {/*в качестве тасок мы передаем массив tasks*/}
            <TodoList title={"What to read"} task={tasks}/>
            <TodoList title={"What to bye"} task={tasks}/>
            {/*<TodoList title={"What to bue"} />*/}
            {/*<TodoList title={"What to learn"}/>*/}
            {/*<TodoList title={"What"}/>*/}
        </div>
    );
}

export default App;
