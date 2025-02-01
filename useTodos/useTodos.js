import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodos = (initialState = []) => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action);
        console.log("Resultado desde el formulario", todo)
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo
        }
        dispatchTodo(action)
    }
    const handleToggleTodo = (todo) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo
        }
        dispatchTodo(action)
        console.log(todos);

    }
    const todosCount=todos.length
    const todosPendent=todos.filter(todo=>todo.done===false).length
   
    return {
        todos,
        todosCount,
        todosPendent,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo
    }

}