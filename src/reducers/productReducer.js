import initialState from './initialState';
import {
    FETCH_PRODUCT_DEFINITIONS,
    REINSTATE_PRODUCT_DEFINITION,
    REMOVE_FROM_PRODUCT_DEFINITIONS,
    RECEIVE_PRODUCT_DEFINITIONS
} from '../actions/actionTypes';
import _ from 'lodash';

export default function products(state = initialState.cart, action) {

    switch (action.type) {
        case FETCH_PRODUCT_DEFINITIONS:
            console.log('FETCH_PRODUCT_DEFINITIONS action');
            return action;
        case RECEIVE_PRODUCT_DEFINITIONS:
            console.log('RECEIVE_PRODUCT_DEFINITIONS action');
            return action.products;
        case REMOVE_FROM_PRODUCT_DEFINITIONS:
            console.log('REMOVE_FROM_PRODUCT_DEFINITIONS action', action.payload.productName);
            const arr = state.filter(product => product.productName !== action.payload.productName);
            return arr;
        case REINSTATE_PRODUCT_DEFINITION:
            console.log('REINSTATE_PRODUCT_DEFINITION action', action.payload.productName);
            let newState = _.cloneDeep(state);
            newState.push(action.payload);
            return newState;
        default:
            return state;
    }
}