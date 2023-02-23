const USER_PROFILE = 'profile/user'

const currentUserProfileAction = (profile) => ({
    type: USER_PROFILE,
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

const initialState = {
    currentUserProfile: {}
}

const profileReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case USER_PROFILE: {
            console.log("ACTION.PROFILE", action.profile)
            newState.currentUserProfile = { ...action.profile };
            return newState
        }
        default: {
            return state;
        }
    }
}

export default profileReducer;
