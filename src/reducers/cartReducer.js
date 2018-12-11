import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/actionTypes';
import initialState from './initialState';

export default function cart(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_CART:
            console.log('ADD_TO_CART action');
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total + parseFloat(action.payload.price)
            };
        case REMOVE_FROM_CART:
            console.log('REMOVE_FROM_CART action');
            return {
                ...state,
                cart: state.cart.filter((item) => item.productName !== action.payload.productName),
                total: state.total - action.payload.price
            };
        default:
            return state;
    }
}