import InputTodo from "./InputTodo";
import ToDoList from "./TodosList";

const TodosLogic = () => {
    const todos = [
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
          },
          {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
          },
          {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
          },
    ];
    return(
        <InputTodo />,
        <ToDoList todosProps={todos}/>
    );
};

export default TodosLogic;