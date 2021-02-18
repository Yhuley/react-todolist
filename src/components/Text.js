import React from "react";
import Types from 'prop-types'
import '../index.css';

export const Text = ({size, children, ...props}) => (
    <div className="text" style={{ fontSize: size, ...props }}>
        {children}
    </div>
)

Text.propTypes = {
    size: Types.string,
    children: Types.oneOfType([Types.string, Types.node, Types.arrayOf(Types.node)]).isRequired,
};

Text.defaultProps = {
    size: '14px',
};