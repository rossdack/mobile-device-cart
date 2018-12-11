import * as types from './actionTypes';
import ProductJson from '../products.json';

/**
 * Return list of products
 * @param json
 * @return {{type: string, products: *}}
 */
export const receiveProductDefinitions = json => {
    return {type: types.RECEIVE_PRODUCT_DEFINITIONS, products: json};
};

/**
 * Fetch product definitions
 * @return {function(*): Promise<Response>}
 */
/*
export function fetchStuff() {
    return dispatch => {
        return fetch('http://www.telstra.com.au/sdfsdffdg', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveProductDefinitions(json)));
    };
}*/

/**
 * Fetch product definitions
 * @return {{type, definitions}}
 */
export const fetchProductDefinitions = () => {
    return receiveProductDefinitions(ProductJson);
};

/**
 * Remove specified product from the available products
 * @param product
 * @return {Function}
 */
export const removeFromProducts = product => dispatch => {
    return dispatch({
        type: types.REMOVE_FROM_PRODUCT_DEFINITIONS,
        payload: product
    });
};