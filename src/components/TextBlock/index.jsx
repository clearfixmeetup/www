import React, {PropTypes} from 'react';

export default function TextBlock(props) {
    return <div className="TextBlock">{props.children}</div>;
}

TextBlock.propTypes = {
    children: PropTypes.element
};
