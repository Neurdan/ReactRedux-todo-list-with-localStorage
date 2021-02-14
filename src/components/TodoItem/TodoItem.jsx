import React, {useState} from "react";
import style from './TodoItem.module.css'
import SVG from "../../assets/svg";

const TodoItem = ({data, value, changeValue, toggleChecked, deleteTodo, changeTodoValue}) => {

    let [changed, setChanged] = useState(false);

    const changeCheckedBtn = id => {
        toggleChecked(id);
    }
    const onFocusInput = (e) => {
        if (e.currentTarget.value != data.todos)
            changeValue(data.todos);
        else changeValue(e.currentTarget.value)
    }
    const onBlurInput = () => {
        setChanged(!changed);
    }
    const onChangeValue = e => {
        changeValue(e.currentTarget.value)
    }
    const deleteTodos = id => {
        deleteTodo(id);
    }
    return (
        <div className={style.container} key={data.id}>

            <div className={style.todoText}>
                <label className={`${data.checked ? style.done : ""}`}>
                    <input className={style.checkbox} type="checkbox" checked={data.checked}
                           onChange={() => changeCheckedBtn(data.id)}/>
                </label>
                {!changed
                &&
                <span className={`${data.checked ? style.done : ""} ${style.spanSelect}`} onDoubleClick={() => {
                    setChanged(!changed);
                }}>{data.todos}</span>}

                {/*If changed == true show input where user changed todo text */}
                {changed &&
                <input className={style.inputForValue} autoFocus={true} onFocus={onFocusInput} onBlur={onBlurInput}
                       value={value}
                       onChange={onChangeValue} type="text"
                       onKeyDown={(e) => {
                           if (e.keyCode === 13) {
                               setChanged(!changed);
                               changeTodoValue(data.id, e.currentTarget.value);
                           }
                       }}/>}
            </div>


            <div className={style.btn} onClick={() => deleteTodos(data.id)}><SVG/>
            </div>
        </div>
    )
}

export default TodoItem;