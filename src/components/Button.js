import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const {title} = props;

    return (
        <div className='button' title={title} onClick={props.onClick}>
            {title}
        </div>
    );

};

Button.propTypes = {
    title: PropTypes.string
};

export default Button