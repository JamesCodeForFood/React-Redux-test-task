import { createStore } from 'redux';
import reducer, { IRootState } from '../reducers';

// no middlewares, sigh

const initialize = (initialState?: IRootState) => createStore(reducer, initialState);

export default initialize;
