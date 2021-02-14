import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, changeValue} from "../../redux/reducers/todoReducer/todoReducer";
import style from "./Input.module.css"

const Input = (props) => {
    const value = useSelector(state => state.todo.value);
    const dispatch = useDispatch();

    const onChangeValue = e => {
        dispatch(changeValue(e.currentTarget.value))
    }

    const keyDown = e => {
        if (e.keyCode === 13) {
            dispatch(addTodo(value));
        }
    }

    const onAddTodo = () => {
        dispatch(addTodo(value));
    }

    return (
        <div className={style.container}>
            <textarea className={style.inputText} rows="5" value={value} onChange={onChangeValue} onKeyDown={keyDown}
                      placeholder='What needs to be done'/>
            <button className={style.btn} onClick={onAddTodo}>Add todo</button>
        </div>
    );
};

export default Input;