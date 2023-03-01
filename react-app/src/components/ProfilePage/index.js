import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetUserProfile } from "../../store/profile";
import { thunkGetAllReviews } from "../../store/review";
import { NavLink } from "react-router-dom";
import './ProfilePage.css'

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const myProfile = useSelector(state => state.profile.currentUserProfile);
    const reviews = useSelector(state => state.review.allReviews);
    const reviewsArr = Object.values(reviews);
    const myReviews = reviewsArr.filter(review => review.profile_id === myProfile.id);

    useEffect(() => {
        dispatch(thunkGetUserProfile());
        dispatch(thunkGetAllReviews());
    }, [dispatch])

    function addDefaultSrc(ev) {
        ev.target.src = 'https://imgs.search.brave.com/oVFSsx09hyfUNAQYm3bjReCAtxnhkPdYw5Hx4R9GnuQ/rs:fit:820:861:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzIw/Mi0yMDI0NzkyX3By/b2ZpbGUtaWNvbi1w/bmcucG5n'
    }

    return (
        <>
            <h1>My Profile</h1>
            <div>{user?.username}</div>
            <NavLink to={'/edit-profile'}>
                <button>Edit Profile</button>
            </NavLink>
            <img className="pfp" onError={addDefaultSrc} src={myProfile.avatar_url} />
            <div>{myProfile.pronoun}</div>
            <div>{myProfile.location}</div>
            <div>{myProfile.bio}</div>
            <div className="my-review-container">
                <div>MY REVIEWS</div>
                {myReviews.length > 0 ? (
                    myReviews.map((review) => (
                        <>
                            <img className="profile-review-poster" src={review.film.poster} />
                            <div>{review.film.title} {review.film.year}</div>
                            <div>{review.rating}/10</div>
                            <div>{review.review_text}</div>
                        </>
                    ))) : (
                    <div>You haven't reviewed any films yet!</div>
                )}
            </div>
        </>
    )
}

export default ProfilePage;
