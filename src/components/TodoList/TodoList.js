import { TodoListItem } from "../TodoListItem/TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <>
            <div className="container px-0 mt-4">
                <div className="row">
                    {todos.map((todo, i) => {
                        return <TodoListItem key={todo.id} handleDelete={handleDelete} handleToggle={handleToggle} todo={todo} index={i} />;
                    })}
                </div>
            </div>
        </>
    );
};
