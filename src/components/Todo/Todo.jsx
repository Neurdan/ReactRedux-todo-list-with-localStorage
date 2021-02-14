import React, {useEffect} from "react";
import TodoItem from "../TodoItem/TodoItem";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import style from "./Todo.module.css"
import {
    changeTodoValue,
    changeValueForChange,
    deleteTodo,
    getTodos,
    toggleChecked
} from "../../redux/reducers/todoReducer/todoReducer";

const Todo = (props) => {

    const todoFromState = useSelector(state => state.todo.todo);
    const value = useSelector(state => state.todo.valueForChange);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    const changeValue = (newValue) => {
        dispatch(changeValueForChange(newValue));
    }
    const toggleForTodoItem = (id) => {
        dispatch(toggleChecked(id));
    }

    const deleteTodoForItem = id => {
        dispatch(deleteTodo(id));
    }

    const changeTodoValueForItem = (id, value) => {
        dispatch(changeTodoValue(id, value));
    }

    const todoArray = todoFromState.map(item => {
        return <TodoItem key={item.id} data={item} value={value} changeValue={changeValue}
                         toggleChecked={toggleForTodoItem} deleteTodo={deleteTodoForItem}
                         changeTodoValue={changeTodoValueForItem}/>
    })

    return (
        <>
            <div className={""}>
                <Input/>
                {todoArray.length > 0 ? <>
                        {todoArray}
                    </>
                    : <div className={style.wrond}>You dont have a tasks, please add a new task.</div>}
            </div>
        </>
    )
}

export default Todo;