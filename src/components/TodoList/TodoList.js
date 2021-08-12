import { TodoListItem } from "../TodoListItem/TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, i) => {
                return <TodoListItem handleDelete={handleDelete} handleToggle={handleToggle} todo={todo} index={i} />
            })}
        </ul>
    );
};
