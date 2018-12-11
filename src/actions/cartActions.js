import * as types from './actionTypes';

/**
 * Add specified product to the cart
 * @param product
 * @return {Function}
 */
export const addProductToCart = product => dispatch => {
    dispatch({
        type: types.ADD_TO_CART,
        payload: product
    })
};

/**
 * Remove specified product from the cart
 * @param product
 * @return {Function}
 */
export const removeProductFromCart = product => dispatch => {
    dispatch({
        type: types.REMOVE_FROM_CART,
        payload: product
    })

};

/**
 * Return product to product list
 * @param product
 * @return {Function}
 */
export const reinstateProductToList = product => dispatch => {
    dispatch({
        type: types.REINSTATE_PRODUCT_DEFINITION,
        payload: product
    })
};