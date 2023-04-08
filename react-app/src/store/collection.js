const ONE_COLLECTION = 'collection/one'
const ALL_COLLECTIONS = 'collection/all'

const getCollectionAction = (collection) => ({
    type: ONE_COLLECTION,
    collection
})

const allCollectionsAction = (collections) => ({
    type: ALL_COLLECTIONS,
    collections
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
        default: {
            return state;
        }
    }
}

export default collectionReducer;
