import Types from 'prop-types';

export const toDoListPropTypes = {
    todo: Types.shape({
        _id: Types.string.isRequired,
        text: Types.string.isRequired,
        completed: Types.bool.isRequired,
    }).isRequired,
    onSwitch: Types.func.isRequired,
};