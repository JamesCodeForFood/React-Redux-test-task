import { combineReducers } from 'redux';
import dummyObjects, { DummyObjectsState } from "./dummyObjects/dummyObjects.reducer";

export interface IRootState {
    readonly dummyObjects: DummyObjectsState
}

const rootReducer = combineReducers<IRootState>({
    dummyObjects
});

export default rootReducer;