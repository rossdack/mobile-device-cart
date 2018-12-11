import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

/**
 * Defines a product.
 * Note, using productName as ID due to lack of suitable field
 */
const Product = props => {
    const {product, buttonAction} = props;

    return (
        <section className='product'>
            <div className='product-name'>{product.productName}</div>
            <div className='product-image-container'>
                <img src={product.productImage} className='product-image' title={product.productName} alt={product.productName}/>
            </div>
            <div className='product-price'>
                <div className='price-unit'>$</div>
                <div className='price-value'>{product.price}</div>
            </div>
            <div className='button-container'>
                <Button title={'Add to Cart'} onClick={(e) => buttonAction(e, {product})}/>
            </div>
        </section>
    )
};

Product.propTypes = {
    product: PropTypes.shape({
        productImage: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    })
};

export default Product;