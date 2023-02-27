import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneFilm } from "../../store/film";
import { useState } from "react";

const FilmPage = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm);
    const [filmTab, setFilmTab] = useState("cast")
    const { filmId } = useParams();

    useEffect(() => {
        dispatch(thunkGetOneFilm(filmId))
    }, [dispatch])

    return (
        <>
            <h1>Film Page</h1>
            <img src={film.still} />
            <img src={film.poster} />
            <div>{film.title}</div>
            <div>{film.year} Directed by {film.director}</div>
            <div>{film.tagline}</div>
            <div>{film.synopsis}</div>
            <div>{film.runtime} mins</div>
        </>
    )
}

export default FilmPage;
