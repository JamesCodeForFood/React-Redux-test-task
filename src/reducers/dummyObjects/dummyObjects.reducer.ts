import { IDummyObject } from './dummyObjects.model';

export const ACTION_TYPES = {
    SET_ENTITIES: 'dummyObjects/GET_ENTITIES',
    CREATE_NEW_DUMMY_OBJECT: 'dummyObjects/CREATE_NEW_DUMMY_OBJECT',
    ADD_TO_TOP: 'dummyObjects/ADD_TO_TOP',
    ADD_TO_BOTTOM: 'dummyObjects/ADD_TO_BOTTOM',
    DELETE_FIRST: 'dummyObjects/DELETE_FIRST',
    DELETE_LAST: 'dummyObjects/DELETE_LAST'
};

const initialState = {
    entities: [] as ReadonlyArray<IDummyObject>
};

export type DummyObjectsState = Readonly<typeof initialState>;

export default (state: DummyObjectsState = initialState, action): DummyObjectsState => {
    switch (action.type) {
        case ACTION_TYPES.SET_ENTITIES:
            return {
                ...state,
                entities: action.payload
            };
        case ACTION_TYPES.CREATE_NEW_DUMMY_OBJECT:
            return {
                ...state,
                entities: [...state.entities, action.payload]
            };
        case ACTION_TYPES.ADD_TO_TOP:
            // task: we need to take LAST item and put at the START of the array
            let lastItem = state.entities.slice(state.entities.length - 1, state.entities.length);
            let arrayWithoutLast = [...state.entities.slice(0, state.entities.length - 1)];
            return {
                ...state,
                entities: [...lastItem, ...arrayWithoutLast]
            };
        case ACTION_TYPES.ADD_TO_BOTTOM:
            // task: we need to take FIRST item and put at the END of the array
            let firstItem = state.entities.slice(0, 1);
            let arrayWithoutFirst = [...state.entities.slice(1, state.entities.length)];
            return {
                ...state,
                entities: [...arrayWithoutFirst, ...firstItem]
            };
        case ACTION_TYPES.DELETE_FIRST:
            return {
                ...initialState,
                entities: [...state.entities.slice(1, state.entities.length)]
            };
        case ACTION_TYPES.DELETE_LAST:
            return {
                ...initialState,
                entities: [...state.entities.slice(0, state.entities.length - 1)]
            };
        default:
            return state;
    }
};

export const setEntities = (entities) => {
    return {
        type: ACTION_TYPES.SET_ENTITIES,
        payload: entities
    };
};

export const createNewObject = (entity: IDummyObject) => {
    return {
        type: ACTION_TYPES.CREATE_NEW_DUMMY_OBJECT,
        payload: entity
    };
};

export const addToTop = () => {
    return {
        type: ACTION_TYPES.ADD_TO_TOP
    };
};

export const addToBottom = () => {
    return {
        type: ACTION_TYPES.ADD_TO_BOTTOM
    };
};

export const deleteFirst = () => {
    return {
        type: ACTION_TYPES.DELETE_FIRST
    };
};

export const deleteLast = () => {
    return {
        type: ACTION_TYPES.DELETE_LAST
    };
};