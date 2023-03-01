import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { thunkGetOneFilm } from "../../store/film";
import { thunkGetMyReview } from "../../store/review";
import { useState } from "react";
import OpenModalButton from "../OpenModalButton";
import CreateReviewModal from "../CreateReviewModal";
import EditReviewModal from "../EditReviewModal";
import Cast from "../Cast";
import './FilmPage.css'

const FilmPage = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm);
    const cast = film.actors;
    const review = useSelector(state => state.review.currentReview);
    const [filmTab, setFilmTab] = useState("cast")
    const { filmId } = useParams();

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
                            <div className="details-tab">
                                <button onClick={() => setFilmTab("cast")}>Cast</button>
                                <button onClick={() => setFilmTab("crew")}>Crew</button>
                                <button onClick={() => setFilmTab("details")}>Details</button>
                                <button onClick={() => setFilmTab("genres")}>Genres</button>
                            </div>
                            <div>
                                {filmTab === "cast" && (
                                    <Cast cast={cast} />
                                )}
                                {filmTab === "crew" && (
                                    <>
                                        <div>Director: {film.director}</div>
                                        <div>Producer: {film.producer}</div>
                                        <div>Writer: {film.writer}</div>
                                        <div>Editor: {film.editor}</div>
                                        <div>Cinematographer: {film.cinematographer}</div>
                                    </>
                                )}
                                {filmTab === "details" && (
                                    <>
                                        <div>Studio: {film.studio}</div>
                                        <div>Country: {film.country}</div>
                                        <div>Language: {film.language}</div>
                                    </>
                                )}
                                {filmTab === "genres" && (
                                    <div>Genres: {film.genre}</div>
                                )}
                            </div>
                            <div>{film.runtime} mins</div>
                        </div>
                        <div className="review-sidebar">
                            <div className="icon-container">
                                {review.watched ? (
                                    <div>Watched</div>
                                ) : (
                                    <div>Not watched</div>
                                )}
                                {review.liked ? (
                                    <div>Liked</div>
                                ) : (
                                    <div>Not liked</div>
                                )}
                            </div>
                            <div className="rating-container">
                                Rating:
                                {review.rating ? (
                                    <div>{review.rating}/10</div>
                                ) : (
                                    <div>Not rated yet!</div>
                                )}
                            </div>
                            <div className="review-button-container">
                                {review.id ? (
                                    <OpenModalButton
                                        buttonText="Edit your review..."
                                        modalComponent={<EditReviewModal />}
                                    />
                                ) : (
                                    <OpenModalButton
                                        buttonText="Review or log..."
                                        modalComponent={<CreateReviewModal />}
                                    />
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
