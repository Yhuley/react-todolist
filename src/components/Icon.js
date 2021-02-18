import React from "react";
import Types from 'prop-types';

import { iconsConfig } from "../iconsConfig";

export const Icon = ({ name, ...props }) => {
    const IconComponent = iconsConfig[name];
    return <IconComponent {...props}/>;
};

Icon.propTypes = {
    name: Types.string.isRequired,
    size: Types.string,
    color: Types.string,
};

Icon.defaultProps = {
    size: '14px',
    color: '#000'
}