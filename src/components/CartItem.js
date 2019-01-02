import React from 'react';
import Button from './Button';
import PropTypes from "prop-types";

/**
 * Defines a product
 */
const CartItem = props => {
    const {product, buttonAction} = props;
    const removeText = `Remove ${product.productName} from cart`;
    return (
        <div className='cart-product'>
            <div className='product-name'>{product.productName}</div>
            <div className='button-container'>
                <Button title='Remove' altText={removeText} onClick={(e) => buttonAction(e, product)} />
            </div>
        </div>
    )
};

CartItem.propTypes = {
    product: PropTypes.shape({
        productImage: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        buttonAction: PropTypes.func
    })
};

export default CartItem;