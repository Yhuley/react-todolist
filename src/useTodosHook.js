import {initialState, TODOS_ACTIONS, todosReducer} from "./todosReducer";
import { useReducer, useEffect } from 'react';

export const useTodosHook = () => {
    const [todos, dispatch] = useReducer(todosReducer, initialState() );

    const onAdd = text => dispatch({type: TODOS_ACTIONS.ADD, text});

    const onSwitch = _id => dispatch({type: TODOS_ACTIONS.COMPLETE, _id});

    const onRemove = _id => dispatch({type:TODOS_ACTIONS.REMOVE, _id});

    const onEdit = newTodo => dispatch({type:TODOS_ACTIONS.EDIT, newTodo});

    useEffect(() => {
        const todosStringified = JSON.stringify(todos);
        localStorage.setItem('todos', todosStringified);

    }, [todos]);

    return { onAdd, onSwitch, onRemove, onEdit, todos };
}