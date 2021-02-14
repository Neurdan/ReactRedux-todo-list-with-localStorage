import React from "react";
import Todo from "./components/Todo/Todo";
import './App.css';

const App = () => {
    return (
        <>
            <div className={"wrapper"}>
                <div className={"container"}>
                    <Todo/>
                </div>
            </div>
        </>
    )
}

export default App;