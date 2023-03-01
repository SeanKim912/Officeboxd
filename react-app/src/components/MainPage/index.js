import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmList from "../FilmList";
import { thunkGetAllReviews } from "../../store/review";
import { thunkGetUserProfile } from "../../store/profile";
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
            <h2 className="main-review-banner">REVIEWS FROM OTHER USERS</h2>
            {notMyReviews.map((review) => (
                <div className="review-card">
                    <div className="review-card-top">
                    <img className="main-review-poster" src={review.film.poster} />
                    <div className="review-card-right">
                        <div className="name-avatar">
                            <img className="review-avatar-main" src={review.profile.avatar_url} />
                            <div>Review by {review.profile.user.username}</div>
                        </div>
                        <h2>{review.film.title} ({review.film.year})</h2>
                        <div>{review.rating}/10</div>
                    </div>
                    </div>
                    <div>{review.review_text}</div>
                </div>
            ))}
        </div>
    )
}

export default MainPage;
