import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Create store, and wrap middleware in redux devtools (if available)
 * @return {Store<any, Action> & {dispatch: any}}
 */
export default function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk))
    );
}