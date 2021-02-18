import React from 'react';

export const withCheckedStyles = WrappedComponent => props => {
    const { todo: { completed } } = props;
    const additionalStyles = completed ?
        {textDecoration: "line-through"} : {}
    return <WrappedComponent {...{ additionalStyles, ...props }}/>;
}