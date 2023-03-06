import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { thunkEditReview } from "../../store/review";
import { thunkDeleteReview } from "../../store/review";
import ReactStars from "react-rating-stars-component";
import './EditReviewModal.css'

const EditReviewModal = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm)
    const profile = useSelector(state => state.profile.currentUserProfile)
    const review = useSelector(state => state.review.currentReview)
    const { closeModal } = useModal();

    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(review.rating);
    const [review_text, setReview_text] = useState(review.review_text);

    const changeRating = {
        size: 30,
        value: rating / 2,
        color: 'lime',
        activeColor: 'lime',
        count: 5,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRating(newValue * 2);
        }
    }

    const handleOnChange = () => {
        setLiked(!liked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: review.id,
            watched: true,
            profile_id: profile.id,
            film_id: film.id,
            liked,
            rating,
            review_text
        }

        await dispatch(thunkEditReview(data));
        closeModal();
    }

    const handleDelete = async () => {
        const data = {
            id: review.id
        }

        await dispatch(thunkDeleteReview(data));
        closeModal();
    }

    return (
        <div className="edit-form-container">
            <h2 className="edit-form-header">Edit your review</h2>
            <form className="edit-review-form" onSubmit={handleSubmit}>
                <label className="edit-form-field">
                    Like:
                    <input
                        type='checkbox'
                        value={liked}
                        onChange={handleOnChange}
                    />
                </label>
                <label className="edit-form-field">
                    Rating:
                    <div className="stars-container">
                        <ReactStars {...changeRating} />
                    </div>
                </label>
                <label className="edit-form-field">
                    <textarea
                        className="review-textarea"
                        value={review_text}
                        placeholder="Add a review..."
                        rows="10"
                        cols="25"
                        maxLength={10000}
                        onChange={(e) => setReview_text(e.target.value)}
                        required
                    />
                </label>
                <button className="edit-button" type="submit">
                    SAVE
                </button>
                <button className="edit-button" onClick={handleDelete}>
                    DELETE
                </button>
            </form>
        </div>
    )
}

export default EditReviewModal;
