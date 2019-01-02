import React from 'react';
import cartReducer from '../cartReducer';
import initialState from '../initialState';
import productReducer from '../productReducer';
import * as actions from '../../actions/actionTypes';
import products from '../../products';

const testProduct = {
    "isPublished": "true",
    "productName": "Sony Xperia XA2",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
    "price": "19"
};

const testCart = {
    cart: [testProduct],
    total: testProduct.price
};

describe('Reducer tests', () => {

    it('it should ignore an invalid cart action', () => {
        const newState = cartReducer([], {type: 'unknown'});
        expect(newState).toEqual([]);
    });

    it('should add an item to the cart', () => {
        const addIt = {
            type: actions.ADD_TO_CART,
            payload: testProduct,
        };
        const prevState = cartReducer(initialState, addIt);
        expect(prevState.cart).toEqual([testProduct]);
    });

    it('should remove an item from the cart', () => {
        const removeIt = {
            type: actions.REMOVE_FROM_CART,
            payload: testProduct,
        };
        const nextState = cartReducer(testCart, removeIt);
        expect(nextState).toEqual(initialState);
    });

    it('it should ignore an invalid product action', () => {
        const newState = productReducer([], {type: 'unknown'});
        expect(newState).toEqual([]);
    });

    it('should remove an item from the available list', () => {
        const removeProduct = {
            type: actions.REMOVE_FROM_PRODUCT_DEFINITIONS,
            payload: testProduct
        };

       const nextState = productReducer(products, removeProduct);
       expect(nextState).toEqual(products.filter(x => x.productName !== testProduct.productName));
    });

    it('should return an item to the available list', () => {
        const returnProduct = {
            type: actions.REINSTATE_PRODUCT_DEFINITION,
            payload: testProduct
        };
        const itemRemoved = products.filter(x => x.productName !== testProduct.productName);

        const state = productReducer(itemRemoved, returnProduct);
        expect(state).toEqual(products);

    });

});