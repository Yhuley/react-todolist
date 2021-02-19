import React, {useState} from 'react';
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";

export const ToDoText = ({todo, onEdit, additionalStyles}) => {
    const [isEditable, setIsEditable] = useState(false);

    const onClick = () => todo.completed ? null : setIsEditable(true);

    const onSetChanges = text => {
        setIsEditable(false);
        onEdit({ ...todo, text });
    }
    return isEditable
        ? <ToDoInput onAdd={onSetChanges} initialValue={todo.text}/>
        : <Text size="12px" {...additionalStyles} {...{ onClick }}>
            {todo.text}
        </Text>;
}