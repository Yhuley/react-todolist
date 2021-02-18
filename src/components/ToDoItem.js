import React from "react";
import {toDoListPropTypes} from "../propTypes";
import {CheckBox} from "./CheckBox";
import {Text} from "./Text";
import {Icon} from "./Icon";
import '../index.css';
import Types from 'prop-types';
import {withCheckedStyles} from "./WithCheckedStyles";

export const ToDoItem = withCheckedStyles(
    ({ todo, onSwitch, onRemove, additionalStyles }) => {
        return (
            <div className="toDoItem">
                <CheckBox {...{todo}} {...{onSwitch}}/>
                <Text size="18px" {...additionalStyles}>
                    {todo.text}
                </Text>
                <Icon name="remove" onClick={() => onRemove(todo._id)}/>
            </div>
        );
    });

ToDoItem.propTypes = {
    ...toDoListPropTypes,
    onRemove: Types.func.isRequired,
    additionalTypes: Types.shape({textDecoration: Types.string})
};