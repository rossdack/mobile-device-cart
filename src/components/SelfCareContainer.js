import React from 'react';
import {connect} from 'react-redux';

import ProductList from './ProductList';
import Cart from './Cart';
import {addProductToCart} from '../actions/cartActions';
import {removeFromProducts} from '../actions/productActions';

class SelfCareContainer extends React.Component {

    addToCart = selection => {
        console.log('add to cart', selection.product.productName);
        this.props.removeFromProducts(selection.product);
        this.props.addProductToCart(selection.product);
    };

    render() {
        return (
            <article className='selfcare-container'>
                <div className='selfcare-content'>
                    <div className='product-list-wrapper'>
                        <ProductList addToCart={this.addToCart}/>
                    </div>
                    <div className='cart-wrapper'>
                        <Cart/>
                    </div>
                </div>
            </article>
        )
    }
}

export default connect(null, {addProductToCart, removeFromProducts})(SelfCareContainer);