import {connect} from 'react-redux';
import React from 'react';

import {removeProductFromCart, reinstateProductToList} from '../actions/cartActions';
import CartItem from './CartItem';

/**
 * Defines a 'shopping cart' of items selected for purchase
 */
class Cart extends React.Component {

    /**
     * Remove from cart callback
     * @param e
     * @param product
     */
    removeFromCart = (e, product) => {
        console.log('removing from cart', product.productName);
        this.props.removeProductFromCart(product);
        this.props.reinstateProductToList(product);
    };

    /**
     * Build an array of <CartItem>s
     * @return {Array}
     */
    renderCartItems() {
        const {cart} = this.props.cart;

        if (cart && cart.length > 0) {
            let cartItems = [];

            cart.forEach((item) => {
                cartItems.push(<CartItem key={item.productName} product={item} buttonAction={this.removeFromCart}/>);
            });

            return cartItems;
        } else {
            return <div className='cart-empty'>Your cart is empty!</div>
        }
    }

    render() {
        return (
            <section className='cart-container'>
                <div className='cart-content-wrapper'>
                    <div className='cart-header'>Shopping Cart</div>
                    <div className='cart-selected-items'>
                        {this.renderCartItems()}
                    </div>
                    <div className='cart-footer'>Total Price: ${this.props.cart.total}</div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps, {removeProductFromCart, reinstateProductToList})(Cart);