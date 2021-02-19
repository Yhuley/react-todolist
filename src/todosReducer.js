import {v4 as uuidv4} from "uuid";
import {act} from "@testing-library/react";

export const TODOS_ACTIONS = {
    ADD: 'add',
    COMPLETE: 'complete',
    REMOVE: 'remove',
    EDIT: 'edit'
}

export const initialState = () => {
    const todosFromStorage = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todosFromStorage);

    return parsedTodos || [];
};

export const todosReducer = (todos, action) => {
    switch (action.type) {
        case TODOS_ACTIONS.ADD:
            return [
                ...todos,
                {
                    _id: uuidv4(),
                    text: action.text,
                    completed: false
                }
            ]
        case TODOS_ACTIONS.COMPLETE:
            return todos.map(
                todo => action._id === todo._id ?
                    {...todo, completed: !todo.completed} : todo
            )
        case TODOS_ACTIONS.REMOVE:
            return todos.filter(todo => action._id !== todo._id)
        case TODOS_ACTIONS.EDIT:
            return todos.map(
                todo =>
                    todo._id === action.newTodo._id ?
                        action.newTodo
                        : todo)
        default:
            throw new Error();
    }
}