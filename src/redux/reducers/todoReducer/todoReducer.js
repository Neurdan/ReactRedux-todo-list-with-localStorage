const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const CHANGE_TODO = "CHANGE_TODO"
const TOGGLE_CHECKED_TODOS = "TOGGLE_CHECKED_TODOS"
const CHANGE_VALUE_FOR_CHANGED = "CHANGE_VALUE_FOR_CHANGED"
const CHANGE_TODO_VALUE = "CHANGE_TODO_VALUE"
const GET_TODOS = "GET_TODOS"

const initialState = {
    todo: [],
    //[
    // {id: 1, todos: "Hello", checked: false},
    // {id: 2, todos: "It`s ", checked: false},
    // {id: 3, todos: "Todo", checked: true},
    // {id: 4, todos: "With", checked: false},
    // {id: 5, todos: "Save", checked: true},
    // {id: 6, todos: "To", checked: false},
    // {id: 7, todos: "Local", checked: true},
    // {id: 8, todos: "Storage", checked: true},
    // ],
    value: "",
    valueForChange: ""
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS: {
            const arrayTodos = JSON.parse(localStorage.getItem('todos')) || [];
            return {
                ...state, todo: arrayTodos
            }
        }
        case ADD_TODO: {
            if (action.todo.trim().length > 0) {
                const todos = {id: Date.now(), todos: action.todo, checked: false}
                const arrayTodos = JSON.parse(localStorage.getItem('todos')) || []
                arrayTodos.push(todos);
                localStorage.setItem('todos', JSON.stringify(arrayTodos))
                return {
                    ...state,
                    value: "",
                    todo: [...state.todo, todos],
                }
            }
        }
        case DELETE_TODO: {
            const array = state.todo.filter(item => item.id !== action.id);
            localStorage.setItem("todos", JSON.stringify(array));
            return {
                ...state,
                todo: [...array],
            }
        }
        case CHANGE_TODO: {
            return {
                ...state,
                value: action.value
            }
        }
        case CHANGE_VALUE_FOR_CHANGED: {
            return {
                ...state,
                valueForChange: action.value
            }
        }
        case TOGGLE_CHECKED_TODOS: {
            const arrTodo = state.todo.map(item => {
                if (item.id === action.id)
                    return {
                        ...item,
                        checked: !item.checked,
                    }
                else {
                    return item
                }
            });
            localStorage.setItem("todos", JSON.stringify(arrTodo));
            return {
                ...state,
                todo: [...arrTodo],
            }
        }
        case CHANGE_TODO_VALUE: {
            const arrTodo = state.todo.map(item => {
                if (item.id === action.id)
                    return {
                        ...item,
                        todos: action.value,
                    }
                else {
                    return item
                }
            });
            localStorage.setItem("todos", JSON.stringify(arrTodo));
            return {
                ...state,
                todo: [...arrTodo],
                valueForChange: "",
            }
        }
        default: {
            return state;
        }
    }
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const changeValue = (value) => {
    return {
        type: CHANGE_TODO,
        value
    }
}
export const changeValueForChange = (value) => {
    return {
        type: CHANGE_VALUE_FOR_CHANGED,
        value
    }
}

export const toggleChecked = (id) => {
    return {
        type: TOGGLE_CHECKED_TODOS,
        id
    }
}

export const changeTodoValue = (id, value) => {
    return {
        type: CHANGE_TODO_VALUE,
        id,
        value
    }
}

export const getTodos = () => {
    return {
        type: GET_TODOS,
    }
}

export default todoReducer;

//store.getState().todo