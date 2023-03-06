import React, {FC} from 'react';
import {TaskType} from "./App";
// описываем тип данных который  будет принимать в качестве параметров функция Todolist
type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
}
// т.е эта функция будет принимать в качестве параметров обьект, кот будет содержать поле title значением которго явл строка
// и в качестве параметров компоненты передает обьект (props)

// запихиваем таски в копмоненты TodoList. Но сначала описать в типе Type что эти данные сюда придут
const TodoList: FC<TodoListPropsType> = (props) => {

    const todoListItems = props.tasks.map((task) => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => {props.removeTask(task.id)}}>x</button>
            </li>
        )
    }
    )
    return (
        <div>
            <div className="todolist">
                {/*вместо заголовка будем брать обьект props и брать из него свойтсво title и использовать эту строку в качестве заголовка*/}
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {todoListItems}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Complited</button>
                </div>
            </div>
        </div>

    );
};

export default TodoList;
