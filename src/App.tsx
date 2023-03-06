import React, {useState} from 'react';
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
     const [tasks, setTasks] = useState([
                {id: 1, title:"HTML & CSS", isDone: true},
                {id: 2, title:"CSS & SCSS", isDone: true},
                {id: 3, title:"ES^/TS", isDone: false},
                {id: 4, title:"Redux", isDone: false},
            ])

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((task)=> task.id !== taskId))
    }
// меняем отображение кнопок тасок
    const [filter, setFilter] = useState <"all" | "active" | "completed">("all")
    let tasksForRender: Array<TaskType> = []
    if(filter === "all"){
        tasksForRender = tasks
    }
    if(filter === "active"){
        tasksForRender = tasks.filter(t => t.isDone === false)
    }
    if (filter ==="completed"){
        tasksForRender = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            {/*в качестве тасок мы передаем массив tasks*/}
            <TodoList title={"What to read"} tasks={tasksForRender} removeTask={removeTask}/>
            {/*<TodoList title={"What to bue"} />*/}
            {/*<TodoList title={"What to learn"}/>*/}
            {/*<TodoList title={"What"}/>*/}
        </div>
    );
}

export default App;
