import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

/**
 * Defines a product.
 * Note, using productName as ID due to lack of suitable field
 */
const Product = props => {
    const {product, buttonAction} = props;
    const alternativeText = `Add ${product.productName} to cart`;

    return (
        <section className='product' title={product.productName}>
            <div className='product-name'>{product.productName}</div>
            <div className='product-image-container'>
                <img src={product.productImage} className='product-image' title={product.productName} alt={product.productName}/>
            </div>
            <div className='product-price'>
                <div className='price-unit'>$</div>
                <div className='price-value'>{product.price}</div>
            </div>
            <div className='button-container'>
                <Button title={'Add to Cart'} altText={alternativeText} onClick={(e) => buttonAction(e, {product})}/>
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