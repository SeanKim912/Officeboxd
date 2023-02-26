import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneFilm } from "../../store/film";

const FilmPage = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm);
    const { filmId } = useParams();

    useEffect(() => {
        dispatch(thunkGetOneFilm(filmId))
    }, [dispatch])

    return (
        <>
            <h1>Film Page</h1>
            <div>{film.title} ({film.year})</div>
            <div>{film.director}</div>
            <div>{film.tagline}</div>
        </>
    )
}

export default FilmPage;
