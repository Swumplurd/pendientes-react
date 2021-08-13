import { useEffect, useReducer } from "react";

import { useForm } from "../../hooks/useForm";
import { todoReducer } from "./todoReducer";

import { TodoList } from "../TodoList/TodoList";

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

    return (
        <>
            <div className="container-fluid mb-5 shadow-lg">
                <div className="row">
                    <div className="col px-0">
                        <div className="bg-dark text-secondary px-4 py-5 text-center">
                            <div className="py-5">
                                <h1 className="display-5 fw-bold text-white">Lista de Tareas</h1>
                                <div className="col-lg-6 mx-auto">
                                    <p className="fs-5 mb-4">Añade tu lista de tareas y guardalas en tu navegador. Asegurate de no borrar los datos de navegacion para no perder tus tareas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        </>
    );
};
