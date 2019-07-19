import { ACTION_TYPES as dummyObjectsActionTypes } from "../../reducers/dummyObjects/dummyObjects.reducer";

export enum viewButtons {
    LIST = 'list',
    BLOCKS = 'blocks'
};

export const actionButton = [
    {
        label: 'Добавить в начало',
        dispatch: 'addToTop',
        action: dummyObjectsActionTypes.ADD_TO_TOP
    },
    {
        label: 'Добавить в конец',
        dispatch: 'addToBottom',
        action: dummyObjectsActionTypes.ADD_TO_BOTTOM
    },
    {
        label: 'Удалить первый',
        dispatch: 'deleteFirst',
        action: dummyObjectsActionTypes.DELETE_FIRST
    },
    {
        label: 'Удалить последний',
        dispatch: 'deleteLast',
        action: dummyObjectsActionTypes.DELETE_LAST
    }
];

export const objectsData = [
    {
        "title": "Заголовок 1",
        "attributes": ["Пункт 1.1", "Пункт 1.2", "Пункт 1.3"],
        "description": "Описание 1 блока"
    },
    {
        "title": "Заголовок 2",
        "attributes": ["Пункт 2.1", "Пункт 2.2"],
        "description": "Описание 2 блока"
    },
    {
        "title": "Заголовок 3",
        "attributes": ["Пункт 3.1", "Пункт 3.2", "Пункт 3.3"],
        "description": "Описание 3 блока"
    },
    {
        "title": "Заголовок 4",
        "attributes": ["Пункт 4.1", "Пункт 4.2", "Пункт 4.3", "Пункт 4.4", "Пункт 4.5"],
        "description": "Описание 4 блока"
    },
    {
        "title": "Заголовок 5",
        "attributes": ["Пункт 5.1"],
        "description": "Описание 5 блока"
    },
    {
        "title": "Заголовок 6",
        "attributes": ["Пункт 6.1", "Пункт 6.2", "Пункт 6.3"],
        "description": "Описание 6 блока"
    }
];