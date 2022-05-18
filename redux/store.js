import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
