const ONE_COLLECTION = 'collection/one'
const ALL_COLLECTIONS = 'collection/all'
const CREATE = 'collection/create'
const EDIT = 'collection/edit'
const DELETE = 'collection/delete'

const getCollectionAction = (collection) => ({
    type: ONE_COLLECTION,
    collection
})

const allCollectionsAction = (collections) => ({
    type: ALL_COLLECTIONS,
    collections
})

const createCollectionAction = (collection) => ({
    type: CREATE,
    collection
})

const editCollectionAction = (collection) => ({
    type: EDIT,
    collection
})

const deleteCollectionAction = (collection) => ({
    type: DELETE,
    collection
})

export const thunkGetCollection = (id) => async (dispatch) => {
    const response = await fetch(`/api/collection/${id}`);

    if (response.ok) {
        const collection = await response.json();
        dispatch(getCollectionAction(collection));

        return collection;
    }
}

export const thunkGetAllCollections = (profile_id) => async (dispatch) => {
    const response = await fetch(`/api/collection/${profile_id}/all`);

    if (response.ok) {
        const collections = await response.json();
        dispatch(allCollectionsAction(collections));

        return collections;
    }
}

export const thunkCreateCollection = (collection) => async (dispatch) => {
    const response = await fetch('/api/collection/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collection)
    });

    if (response.ok) {
        const newCollection = await response.json();
        dispatch(createCollectionAction(newCollection));

        return newCollection;
    }
}

export const thunkEditCollection = (collection) => async (dispatch) => {
    const response = await fetch('/api/collection/edit', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collection)
    });

    if (response.ok) {
        const editedCollection = await response.json();
        dispatch(editCollectionAction(editedCollection));

        return editedCollection;
    }
}

export const thunkDeleteCollection = (collection) => async (dispatch) => {
    const response = await fetch('/api/collection/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(collection)
    });

    if (response.ok) {
        const deletedCollection = await response.json();
        dispatch(deleteCollectionAction(deletedCollection));

        return deletedCollection;
    }
}

const normalize = (arr) => {
    const resultObj = {};
    arr.forEach((element) => (resultObj[element.id] = element));

    return resultObj;
}

const initialState = {
    currentCollection: {},
    allCollections: {}
}

const collectionReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ONE_COLLECTION: {
            newState.currentCollection = { ...action.collection };
            return newState;
        }
        case ALL_COLLECTIONS: {
            newState.currentCollection = {}
            newState.allCollections = normalize(action.collections);
            return newState;
        }
        case CREATE: {
            newState.currentCollection = { ...action.collection };
            return newState;
        }
        case EDIT: {
            newState.currentCollection = { ...action.collection };
            newState.allCollections[action.collection.id] = { ...action.collection }
            return newState;
        }
        case DELETE: {
            newState.currentCollection = {}
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default collectionReducer;
