import React, {useState} from "react";
import Types from 'prop-types';

export const ToDoInput = ({onAdd, initialValue}) => {
    const [value, setInputValue] = useState(initialValue);

    const onChange = event => setInputValue(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if (value.trim().length > 0) {
            onAdd(value);
            setInputValue('')
        }
    };

    return (
        <form className="toDoForm" {...{onSubmit}}>
            <input className="toDoInput" {...{value}} {...{onChange}}/>
        </form>
    )
}

ToDoInput.propTypes = {
    onAdd: Types.func.isRequired,
    initialValue: Types.string
};

ToDoInput.defaultProps = {
    initialValue: ''
};