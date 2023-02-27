const MY_REVIEW = 'review/mine'
const CREATE_REVIEW = 'review/create'
const ALL_REVIEWS = 'review/all'

const myReviewAction = (review) => ({
    type: MY_REVIEW,
    review
})

const allReviewsAction = (reviews) => ({
    type: ALL_REVIEWS,
    reviews
})

const createReviewAction = (review) => ({
    type: CREATE_REVIEW,
    review
})


export const thunkGetMyReview = (filmId) => async (dispatch) => {
    const response = await fetch(`/api/review/${filmId}`);

    if (response.ok) {
        const review = await response.json();
        console.log('REVIEW RESPONSE CONTENTS', review)
        dispatch(myReviewAction(review));

        return review;
    }
}

export const thunkGetAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/review/all');

    if (response.ok) {
        const reviews = await response.json();
        dispatch(allReviewsAction(reviews));

        return reviews;
    }
}

export const thunkCreateReview = (review) => async (dispatch) => {
    const response = await fetch('/api/review/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const newReview = await response.json();
        dispatch(createReviewAction(newReview));

        return newReview;
    }
}


const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

const initialState = {
    currentReview: {},
    allReviews: {}
}


const reviewReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case MY_REVIEW: {
            newState.currentReview = { ...action.review };
            return newState;
        }
        case ALL_REVIEWS: {
            newState.currentReview = {};
            newState.allReviews = normalize(action.reviews);
            return newState;
        }
        case CREATE_REVIEW: {
            newState.currentReview = { ...action.review };
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default reviewReducer;
