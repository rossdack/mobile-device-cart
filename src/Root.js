/**
 * Wrapper to allow jest testing of redux
 */

import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';

export default ({ children }) => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return <Provider store={store}>{children}</Provider>;
};