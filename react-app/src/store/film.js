const ALL_FILMS = 'film/all'
const GET_FILM = 'film/one'
const CREATE_FILM = 'film/create'

const allFilmsAction = (film) => ({
    type: ALL_FILMS,
    film
})

const oneFilmAction = (film) => ({
    type: GET_FILM,
    film
})

const createFilmAction = (film) => ({
    type: CREATE_FILM,
    film
})

export const thunkGetAllFilms = () => async (dispatch) => {
    const response = await fetch('/api/film/all')

    if (response.ok) {
        const films = await response.json();
        dispatch(allFilmsAction(films));

        return films;
    } else {
        return null;
    }
}

export const thunkGetOneFilm = (filmId) => async (dispatch) => {
    const response = await fetch(`/api/film/${filmId}`)

    if (response.ok) {
        const film = await response.json();
        dispatch(oneFilmAction(film));

        return film;
    } else {
        return null;
    }
}

export const thunkCreateFilm = (formData) => async (dispatch) => {
    const response = await fetch('/api/film/create', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const filmData = await response.json();
        dispatch(createFilmAction(filmData));

        return filmData;
    }
}

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

const initialState = {
    allFilms: {},
    currentFilm: {}
}


const filmReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case ALL_FILMS: {
            newState.currentFilm = {};
            newState.allFilms = normalize(action.film);
            return newState;
        }
        case GET_FILM: {
            newState.currentFilm = { ...action.film };
            return newState;
        }
        case CREATE_FILM: {
            newState.currentFilm = { ...action.film };
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default filmReducer;
