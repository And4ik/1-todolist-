import React, {FC} from 'react';
// описываем тип данных кот будет принмать в качестве параметров функция Todolist
type TodoListPropsType = {
    title: string
}
// т.е эта функция будет принимать в качестве параметров обьект, кот будет содержать поле title значением которго явл строка
// и в качестве параметров компоненты передает обьект (props)
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
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
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