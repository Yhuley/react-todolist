import React from "react";
import {Text} from "./components/Text";
import {ToDoInput} from "./components/ToDoInput";
import {ToDoItem} from "./components/ToDoItem";
import {useTodosHook} from "./useTodosHook";

export const App = () => {
    const  { onAdd, onSwitch, onRemove, todos } = useTodosHook();

    return (
        <div className="application">
            <Text size="40px">Todo List</Text>
            <ToDoInput onAdd={onAdd}/>
            <div className="toDoList">
                {todos.map(
                    todo => <ToDoItem
                        key={ todo._id }
                        {...{ todo }}
                        {...{ onSwitch }}
                        {...{ onRemove }}
                    />)}
            </div>
        </div>
    );
}
