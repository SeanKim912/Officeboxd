import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmList from "../FilmList";
import { thunkGetAllReviews } from "../../store/review";
import { thunkGetUserProfile } from "../../store/profile";
import ReactStars from "react-rating-stars-component";
import './MainPage.css'

const MainPage = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review.allReviews);
    const profile = useSelector(state => state.profile.currentUserProfile);
    const reviewsArr = Object.values(reviews);
    const notMyReviews = reviewsArr.filter(review => review.profile_id !== profile.id);

    useEffect(() => {
        dispatch(thunkGetAllReviews());
        dispatch(thunkGetUserProfile());
    }, [dispatch])

    return (
        <div className="main-body">
            <h1 className="welcome-banner">Welcome to Officeboxd! Here's what we've been watching...</h1>
            <FilmList />
            <div className="main-review-container">
                <h2 className="main-review-banner">REVIEWS FROM OTHER USERS</h2>
                {notMyReviews.map((review) => (
                    <div className="review-card">
                        <div className="review-card-top">
                            <img className="main-review-poster" src={review.film.poster} />
                            <div className="review-card-right">
                                <div className="name-avatar">
                                    <img className="review-avatar-main" src={review.profile.avatar_url} />
                                    <div className="review-main-username">{review.profile.user.username}</div>
                                </div>
                                <div className="title-year">
                                    <h2 className="main-film-title">{review.film.title}</h2>
                                    <h2 className="main-film-year">{review.film.year}</h2>
                                </div>
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
                        </div>
                        <div className="main-review-text">{review.review_text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainPage;
