export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li className="list-group-item d-flex" key={todo.id}>
            <p onClick={() => handleToggle(todo.id)} className={`${todo.done && "text-decoration-line-through"}`}>
                {index + 1}. {todo.desc}
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
};
