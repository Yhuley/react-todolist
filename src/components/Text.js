import React from "react";
import Types from 'prop-types'
import '../index.css';

export const Text = ({size, children, onClick, ...props}) => (
    <div className="text" {...{ onClick }} style={{ fontSize: size, ...props }}>
        {children}
    </div>
)

Text.propTypes = {
    size: Types.string,
    onClick: Types.func,
    children: Types.oneOfType([Types.string, Types.node, Types.arrayOf(Types.node)]).isRequired,
};

Text.defaultProps = {
    size: '14px',
    onClick: () => null
};