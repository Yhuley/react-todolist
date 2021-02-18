import React, {useState, useEffect} from "react";
import {toDoListPropTypes} from '../propTypes';

export const CheckBox = ({todo, onSwitch}) => {
    const [checked, setChecked] = useState(false);

    const onChange = event => {
        onSwitch(event.target.value);
        setChecked(!checked);
    };

    useEffect(() => {
        setChecked(todo.completed);
    }, []);

    return <input
        type="checkBox"
        value={todo._id}
        onChange={onChange}
        {...{checked}}
    />
};

CheckBox.propTypes = toDoListPropTypes;