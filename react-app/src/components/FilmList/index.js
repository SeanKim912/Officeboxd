import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllFilms } from "../../store/film";
import { NavLink } from "react-router-dom";
import './FilmList.css';

const FilmList = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.film.allFilms);
    const filmsArr = Object.values(films);

    useEffect(() => {
        dispatch(thunkGetAllFilms());
    }, [dispatch])

    return (
        <>
            <div className="card-container">
                <ul className="card-list">
                    {filmsArr.map((film) => {
                        return (
                            <NavLink exact to={`/film/${film.id}`}>
                                <img className="film-card" src={film.poster} />
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default FilmList;
