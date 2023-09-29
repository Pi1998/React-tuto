import TodoItem from "./TodoItem";

const ToDoList = ({todosProps}) => {
    return(
        <ul>
            {todosProps.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} />
            ))}
        </ul>
    );
};

export default ToDoList;