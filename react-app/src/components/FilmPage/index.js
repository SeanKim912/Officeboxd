import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneFilm } from "../../store/film";
import { thunkGetMyReview } from "../../store/review";
import { useState } from "react";
import OpenModalButton from "../OpenModalButton";
import './FilmPage.css'

const FilmPage = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.currentUserProfile);
    const film = useSelector(state => state.film.currentFilm);
    const review = useSelector(state => state.review.currentReview);
    const [filmTab, setFilmTab] = useState("cast")
    const { filmId } = useParams();

    console.log("profile and film id", profile.id, filmId)

    useEffect(() => {
        dispatch(thunkGetOneFilm(filmId));
        dispatch(thunkGetMyReview(filmId));
    }, [dispatch])

    return (
        <>
            <div className="filmPageContainer">
                <img className="still" src={film.still} />
                <div className="main-row">
                    <img className="left-poster" src={film.poster} />
                    <div className="right-section">
                        <div className="title-container">
                            <h1>{film.title}</h1>
                            <div>{film.year} Directed by {film.director}</div>
                        </div>
                        <div className="middle-container">
                            <div>{film.tagline}</div>
                            <div>{film.synopsis}</div>
                            <div>{film.runtime} mins</div>
                        </div>
                        <div className="review-sidebar">
                            <div className="icon-container">
                                {review.watched ? (
                                    <div>{review.watched}</div>
                                ) : (
                                    <div>Not watched</div>
                                )}
                                {review.liked ? (
                                    <div>{review.liked}</div>
                                ) : (
                                    <div>Not liked</div>
                                )}
                            </div>
                            <div className="rating-container">
                                Rating:
                                {review.rating ? (
                                    <div>{review.rating}</div>
                                ) : (
                                    <div>Not rated yet!</div>
                                )}
                            </div>
                            <div className="review-button-container">
                                {review.id ? (
                                    <button>Edit your review...</button>
                                    ) : (
                                    <button>Review or log...</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Your review</h3>
                    {review.review_text ? (
                        <div>{review.review_text}</div>
                    ) : (
                        <div>You haven't reviewed this film yet!</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FilmPage;
