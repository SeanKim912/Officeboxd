const USER_PROFILE = 'profile/user'
const CREATE_PROFILE = 'profile/create'
const EDIT_PROFILE = 'profile/edit'
const DELETE_PROFILE = 'profile/delete'

const currentUserProfileAction = (profile) => ({
    type: USER_PROFILE,
    profile
})

const createProfileAction = (profile) => ({
    type: CREATE_PROFILE,
    profile
})

const editProfileAction = (profile) => ({
    type: EDIT_PROFILE,
    profile
})

const deleteProfileAction = (profile) => ({
    type: DELETE_PROFILE,
    profile
})

export const thunkGetUserProfile = () => async (dispatch) => {
    const response = await fetch('/api/profile/current_user');

    if (response.ok) {
        const profile = await response.json();
        dispatch(currentUserProfileAction(profile));

        return profile;
    } else {
        return null;
    }
}

export const thunkCreateProfile = (formData) => async (dispatch) => {
    console.log("AAAAA", formData["image"])
    const response = await fetch('/api/profile/create', {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: formData
    });

    if (response.ok) {
        const profileData = await response.json();
        dispatch(createProfileAction(profileData));

        return profileData;
    }
}

export const thunkEditProfile = (profile) => async (dispatch) => {
    const response = await fetch('/api/profile/edit', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
    });

    if (response.ok) {
        const profileData = await response.json();
        dispatch(editProfileAction(profileData));

        return profileData;
    }
}

export const thunkDeleteProfile = () => async (dispatch) => {
    const response = await fetch('api/profile/delete', {
        method: 'DELETE'
    });

    if (response.ok) {
        const removedUser = await response.json();
        dispatch(deleteProfileAction(removedUser));

        return removedUser;
    }
}


const initialState = {
    currentUserProfile: {}
}


const profileReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case USER_PROFILE: {
            newState.currentUserProfile = { ...action.profile };
            return newState;
        }
        case CREATE_PROFILE: {
            newState.currentUserProfile = { ...action.profile };
            return newState;
        }
        case EDIT_PROFILE: {
            newState.currentUserProfile = { ...action.profile };
            return newState;
        }
        case DELETE_PROFILE: {
            newState.currentUserProfile = {};
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default profileReducer;
