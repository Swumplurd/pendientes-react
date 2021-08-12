import { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import { todoReducer } from "./todoReducer";

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
        <div>
            <h1>TodoApp {todos.length}</h1>
            <hr />

            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <ul className="list-group list-group-flush">
                            {todos.map((todo, i) => {
                                return (
                                    <li className="list-group-item d-flex" key={todo.id}>
                                        <p onClick={() => handleToggle(todo.id)} className={`${todo.done && "text-decoration-line-through"}`}>
                                            {i + 1}. {todo.desc}
                                        </p>
                                        <button
                                            onClick={() => {
                                                handleDelete(todo.id);
                                            }}
                                            className="btn btn-danger ms-3"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-5">
                        <h4>Agregar TODO</h4>
                        <hr />

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Descripcion
                                </label>
                                <input type="text" onChange={handleInputChange} value={description} name="description" className="form-control" id="desc" aria-describedby="descHelp" />
                                <div id="descHelp" className="form-text">
                                    Ingresa una desc...
                                </div>
                            </div>

                            <button type="submit" className="btn btn-success">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
