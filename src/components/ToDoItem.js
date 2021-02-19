import React from "react";
import {toDoListPropTypes} from "../propTypes";
import {CheckBox} from "./CheckBox";
import {Icon} from "./Icon";
import '../index.css';
import Types from 'prop-types';
import {withCheckedStyles} from "./WithCheckedStyles";
import {ToDoText} from "./ToDoText";

export const ToDoItem = withCheckedStyles(
    ({ todo, onSwitch, onRemove, onEdit, additionalStyles }) => {
        return (
            <div className="toDoItem">
                <CheckBox {...{todo}} {...{onSwitch}}/>
                <ToDoText {...{todo, additionalStyles, onEdit}}/>
                <Icon name="remove" onClick={() => onRemove(todo._id)}/>
            </div>
        );
    });

ToDoItem.propTypes = {
    ...toDoListPropTypes,
    onRemove: Types.func.isRequired,
    onEdit: Types.func.isRequired,
    additionalTypes: Types.shape({textDecoration: Types.string})
};