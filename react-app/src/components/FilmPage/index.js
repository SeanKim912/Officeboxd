import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useState } from "react";
import { thunkGetOneFilm, thunkDeleteFilm } from "../../store/film";
import { thunkGetMyReview } from "../../store/review";
import { thunkGetFilmsReviews } from "../../store/review";
import { thunkGetUserProfile } from "../../store/profile";
import ReactStars from "react-rating-stars-component"
import OpenModalButton from "../OpenModalButton";
import CreateReviewModal from "../CreateReviewModal";
import EditReviewModal from "../EditReviewModal";
import EditPosterModal from "../EditPosterModal";
import EditStillModal from "../EditStillModal";
import Cast from "../Cast";
import './FilmPage.css'

const FilmPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const film = useSelector(state => state.film.currentFilm);
    const cast = film.actors;
    const profile = useSelector(state => state.profile.currentUserProfile);
    const review = useSelector(state => state.review.currentReview);
    const otherReviews = useSelector(state => state.review.filmsReviews);
    const otherReviewsArr = Object.values(otherReviews);
    const otherReviewsFiltered = otherReviewsArr.filter(review => review.profile_id !== profile.id);
    const [filmTab, setFilmTab] = useState("crew");
    const { filmId } = useParams();

    const starRating = {
        size: 30,
        count: 5,
        value: (review.rating) / 2,
        color: 'lime',
        activeColor: 'lime',
        isHalf: true,
        edit: false,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />
    }

    const stars = () => {
        if (review.rating === 1) {
            return (
                <>
                    <i class="fa-solid fa-star-half-stroke fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 2) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 3) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star-half-stroke fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 4) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 5) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star-half-stroke fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 6) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 7) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star-half-stroke fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 8) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-regular fa-star fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 9) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star-half-stroke fa-2xl"></i>
                </>
            )
        }
        if (review.rating === 10) {
            return (
                <>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                    <i class="fa-solid fa-star fa-2xl"></i>
                </>
            )
        }
    }

    const handleDelete = async () => {
        const data = {
            id: film.id
        }

        await dispatch(thunkDeleteFilm(data));
        history.push('/');
    }


    useEffect(() => {
        dispatch(thunkGetUserProfile());
        dispatch(thunkGetOneFilm(filmId));
        dispatch(thunkGetMyReview(filmId));
        dispatch(thunkGetFilmsReviews(filmId));
    }, [dispatch])

    return (
        <div className="background-container">
            <div className="filmPageContainer">
                <div className="still" style={{ backgroundImage: `url(${film.still})` }}>
                    <div className="gradient-filter" />
                </div>
                <div className="content-container">
                    <div className="main-row">
                        <div className="left-section">
                            <img className="left-poster" src={film.poster} />
                            {profile.id === 1 && (
                                <ul className="admin-container">
                                    <li className="admin-button">
                                        <NavLink exact to={'/film/edit'}>
                                            <button className="dropdown-button">Edit this film</button>
                                        </NavLink>
                                    </li>
                                    <li className="admin-button">
                                        <OpenModalButton
                                            buttonText="Edit poster"
                                            modalComponent={<EditPosterModal />}
                                        />
                                    </li>
                                    <li className="admin-button">
                                        <OpenModalButton
                                            buttonText="Edit banner"
                                            modalComponent={<EditStillModal />}
                                        />
                                    </li>
                                    <li className="admin-button">
                                        <button className="dropdown-button" onClick={handleDelete}>Delete this film</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="right-section">
                            <div className="title-container">
                                <h1 className="title">{film.title}</h1>
                                <div className="title-sub">
                                    <div style={{ color: 'white', marginRight: 10 }}>{film.year}</div>
                                    <div style={{ marginRight: 10 }}>Directed by</div>
                                    <div style={{ color: 'white', marginRight: 10 }}>{film.director}</div>
                                </div>
                            </div>
                            <div className="middle-container">
                                <div style={{ marginBottom: 15 }}>{film.tagline}</div>
                                <div style={{ fontFamily: "TiemposHeadlineWeb-Bold,Georgia,serif", marginBottom: 45 }}>{film.synopsis}</div>
                                <div className="details-tabs">
                                    <button className="tab" onClick={() => setFilmTab("crew")}>CREW</button>
                                    <button className="tab" onClick={() => setFilmTab("details")}>DETAILS</button>
                                    <button className="tab" onClick={() => setFilmTab("genres")}>GENRES</button>
                                    <button className="tab" onClick={() => setFilmTab("cast")}>CAST</button>
                                </div>
                                <div>
                                    {filmTab === "cast" && (
                                        <Cast cast={cast} />
                                    )}
                                    {filmTab === "crew" && (
                                        <div className="info-block">
                                            <div className="job-title">DIRECTOR</div>
                                            <div className="name">{film.director}</div>
                                            <div className="job-title">PRODUCER</div>
                                            <div className="name">{film.producer}</div>
                                            <div className="job-title">WRITER</div>
                                            <div className="name">{film.writer}</div>
                                            <div className="job-title">EDITOR</div>
                                            <div className="name">{film.editor}</div>
                                            <div className="job-title">CINEMATOGRAPHER</div>
                                            <div className="name">{film.cinematographer}</div>
                                        </div>
                                    )}
                                    {filmTab === "details" && (
                                        <div className="info-block">
                                            <div className="job-title">STUDIO</div>
                                            <div className="name" style={{ marginRight: 30 }}>{film.studio}</div>
                                            <div className="job-title">COUNTRY</div>
                                            <div className="name" style={{ marginRight: 30 }}>{film.country}</div>
                                            <div className="job-title">LANGUAGE</div>
                                            <div className="name" style={{ marginRight: 30 }}>{film.language}</div>
                                        </div>
                                    )}
                                    {filmTab === "genres" && (
                                        <div className="info-block">
                                            <div className="job-title">GENRES</div>
                                            <div className="name">{film.genre}</div>
                                        </div>
                                    )}
                                </div>
                                <div style={{ marginTop: 40 }}>{film.runtime} mins</div>
                            </div>
                            <div className="review-sidebar">
                                <div className="icon-container">
                                    {review.watched ? (
                                        <div className="icon-check">
                                            <i class="fa-solid fa-eye fa-2xl"></i>
                                            <div className="icon-text">Watched</div>
                                        </div>
                                    ) : (
                                        <div className="icon-uncheck">
                                            <i class="fa-regular fa-eye fa-2xl"></i>
                                            <div className="icon-text">Watch</div>
                                        </div>
                                    )}
                                    {review.liked ? (
                                        <div className="icon-check">
                                            <i class="fa-solid fa-heart fa-2xl" style={{ color: "#ff9010" }}></i>
                                            <div className="icon-text">Liked</div>
                                        </div>
                                    ) : (
                                        <div className="icon-uncheck">
                                            <i class="fa-regular fa-heart fa-2xl"></i>
                                            <div className="icon-text">Like</div>
                                        </div>
                                    )}
                                </div>
                                <div className="rating-container">
                                    {review.rating ? (
                                        <>
                                            <div className="rated-text">Rated</div>
                                            <div className="stars-container">{stars()}</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="rate-text">Rate</div>
                                            <div className="unrated-stars-container">
                                                <i class="fa-regular fa-star fa-2xl"></i>
                                                <i class="fa-regular fa-star fa-2xl"></i>
                                                <i class="fa-regular fa-star fa-2xl"></i>
                                                <i class="fa-regular fa-star fa-2xl"></i>
                                                <i class="fa-regular fa-star fa-2xl"></i>
                                            </div>
                                        </>
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
                    <div className="review-text-container">
                        <h3 className="review-header">YOUR REVIEW</h3>
                        {review.review_text ? (
                            <div className="your-review">{review.review_text}</div>
                        ) : (
                            <div className="your-review">You haven't reviewed this film yet!</div>
                        )}
                        <h3 className="review-header">OTHER REVIEWS</h3>
                        {otherReviewsFiltered.length > 0 ? (
                            otherReviewsFiltered.map((review) => (
                                <div className="other-reviews-card">
                                    <img className="review-avatar" src={review.profile.avatar_url} />
                                    <div className="other-reviews-card-right">
                                        <div className="review-card-right-top">
                                            <div style={{ marginRight: 5, color: "#678", fontSize: 13 }}>Review by</div>
                                            <div style={{ marginRight: 5, fontSize: 13, fontWeight: 750 }}>{review.profile.user.username}</div>
                                            <ReactStars
                                                size={16}
                                                count={5}
                                                value={(review.rating) / 2}
                                                color={'lime'}
                                                activeColor={'lime'}
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={<i className="far fa-star" />}
                                                halfIcon={<i className="fa fa-star-half-alt" />}
                                                filledIcon={<i className="fa fa-star" />}
                                            />
                                        </div>
                                        <div className="other-reviews-card-text">{review.review_text}</div>
                                    </div>
                                </div>
                            ))) : (
                            <div className="your-review">No one else has reviewed this film yet!</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmPage;
