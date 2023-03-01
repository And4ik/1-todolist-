import React, {FC} from 'react';
import {TaskType} from "./App";
// описываем тип данных который  будет принимать в качестве параметров функция Todolist
type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
// т.е эта функция будет принимать в качестве параметров обьект, кот будет содержать поле title значением которго явл строка
// и в качестве параметров компоненты передает обьект (props)

// запихиваем таски в копмоненты TodoList. Но сначала описать в типе Type что эти данные сюда придут
const TodoList: FC<TodoListPropsType> = (props) => {
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
                    <li>
                        <input type="checkbox" checked={props.tasks[0].isDone}/>
                        {/*из обьекта props берем нулевой элемент массив tasks и берем еще название title*/}
                        <span>{props.tasks[0].title}</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={props.tasks[1].isDone}/>
                        <span>{props.tasks[1].title}</span>
                    </li>
                    <li><input type="checkbox" checked={props.tasks[2].isDone}/>
                        <span>{props.tasks[2].title}</span>
                    </li>
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