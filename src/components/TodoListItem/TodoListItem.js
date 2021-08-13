export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 shadow-lg">
            <div className={!todo.done ? "card bg-secondary bg-gradient text-light" : "card bg-success bg-gradient text-light"}>
                <div className="card-body">
                    <h5 className="card-title">Tarea: {index + 1}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <hr />
                    <div className="d-grid">
                        <button
                            onClick={() => {
                                handleDelete(todo.id);
                            }}
                            className="btn btn-dark mb-2"
                        >
                            Borrar
                        </button>
                        <button
                            onClick={() => {
                                handleToggle(todo.id);
                            }}
                            className="btn btn-info"
                        >
                            {!todo.done ? "Marcar como Terminada" : "Marcar como Pendiente"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
