import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const {title, altText} = props;
    return (
        <div className='button' title={altText} onClick={props.onClick}>
            {title}
        </div>
    );

};

Button.propTypes = {
    title: PropTypes.string,
    altText: PropTypes.string
};

export default Button