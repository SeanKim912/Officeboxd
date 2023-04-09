import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetUserProfile } from "../../store/profile";
import { thunkGetAllReviews } from "../../store/review";
import { thunkGetAllCollections } from "../../store/collection";
import { thunkGetAllFilms } from "../../store/film";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import './ProfilePage.css'

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const myProfile = useSelector(state => state.profile.currentUserProfile);
    const reviews = useSelector(state => state.review.allReviews);
    const reviewsArr = Object.values(reviews);
    const myReviews = reviewsArr.filter(review => review.profile_id === myProfile.id);
    const films = useSelector(state => state.film.allFilms);
    const filmsArr = Object.values(films);
    const collections = useSelector(state => state.collection.allCollections);
    const collectionsArr = Object.values(collections);

    useEffect(() => {
        dispatch(thunkGetUserProfile());
        dispatch(thunkGetAllReviews());
        dispatch(thunkGetAllFilms());
        dispatch(thunkGetAllCollections(user.id));
    }, [dispatch])

    function addDefaultSrc(ev) {
        ev.target.src = 'https://imgs.search.brave.com/oVFSsx09hyfUNAQYm3bjReCAtxnhkPdYw5Hx4R9GnuQ/rs:fit:820:861:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzIw/Mi0yMDI0NzkyX3By/b2ZpbGUtaWNvbi1w/bmcucG5n'
    }

    return (
        <div className="profile-main-div">
            <div className="profile-container">
                <div className="profile-banner">
                    <img className="pfp" onError={addDefaultSrc} src={myProfile.avatar_url} />
                    <div className="profile-banner-right">
                        <div className="banner-right-top">
                            <h1 className="profile-page-username">{user?.username}</h1>
                            <NavLink to={'/edit-profile'}>
                                <button className="edit-profile-link-button">EDIT PROFILE</button>
                            </ NavLink>
                        </div>
                        <div className="pronoun">{myProfile.pronoun}</div>
                        <div className="bio">{myProfile.bio}</div>
                        <div className="location">{myProfile.location}</div>
                    </div>
                </div>
                <div className="my-review-container">
                    <div className="my-review-header">MY COLLECTIONS</div>
                    {collectionsArr.length > 0 ? (
                        collectionsArr.map((collection) => (
                            <div className="collection-card">
                                <NavLink exact to={`/collection/${collection.id}`}>
                                    <h2>{collection.name}</h2>
                                    <div>{collection.description}</div>
                                </NavLink>
                            </div>
                        ))) : (
                        <div>You haven't made any collections yet!</div>
                    )}
                    <NavLink exact to={'/collection/create'}>
                        <button>Add a collection...</button>
                    </NavLink>
                </div>
                <div className="my-review-container">
                    <div className="my-review-header">MY REVIEWS</div>
                    {myReviews.length > 0 ? (
                        myReviews.map((review) => (
                            <div className="profile-review-card">
                                <img className="profile-review-poster" src={review.film.poster} />
                                <div className="profile-review-right">
                                    <div className="profile-title-year">
                                        <h2 className="profile-film-title">{review.film.title}</h2>
                                        <h2 className="profile-film-year">{review.film.year}</h2>
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
                                    <div className="profile-review-text">{review.review_text}</div>
                                </div>
                            </div>
                        ))) : (
                        <div>You haven't reviewed any films yet!</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
