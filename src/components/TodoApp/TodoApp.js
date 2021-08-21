import { useEffect, useReducer } from "react";

import { useForm } from "../../hooks/useForm";
import { todoReducer } from "./todoReducer";

import { TodoList } from "../TodoList/TodoList";
import { TodoHeader } from "../TodoHeader/TodoHeader";

const init = () => {
    /* return [
        {
            id: new Date().getTime(),
            desc: "Aprender React",
            done: false,
        },
    ]; */
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: "",
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId,
        };

        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length === 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: "add",
            payload: newTodo,
        };

        dispatch(action);
        reset();
    };

    let dones = 0;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].done) {
            dones++;
        }
    }

    let pors = (dones * 100) / todos.length;

    const style = {
        width: `${parseInt(pors)}%`
    };

    return (
        <>
            <TodoHeader />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h4>Agregar Tarea</h4>
                        <hr />

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Descripcion
                                </label>
                                <input type="text" onChange={handleInputChange} value={description} name="description" className="form-control shadow-lg" id="desc" aria-describedby="descHelp" />
                                <div id="descHelp" className="form-text">
                                    Escribe una descripcion...
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success">
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-8 col-md col-sm-12">
                        <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                    </div>
                </div>
            </div>
            <div className="progress fixed-bottom">
                <div className="progress-bar progress-bar-striped bg-info progress-bar-animated text-dark" role="progressbar" style={style} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    {parseInt(pors) || ''}%
                </div>
            </div>
        </>
    );
};
