import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { thunkCreateReview } from "../../store/review";
import ReactStars from "react-rating-stars-component";
import './CreateReviewModal.css'

const CreateReviewModal = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm)
    const profile = useSelector(state => state.profile.currentUserProfile)
    const { closeModal } = useModal();

    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(1);
    const [review_text, setReview_text] = useState(null);

    const changeRating = {
        size: 30,
        value: rating/2,
        count: 5,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRating(newValue*2);
        }
    }

    const handleOnChange = () => {
        setLiked(!liked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            watched: true,
            profile_id: profile.id,
            film_id: film.id,
            liked,
            rating,
            review_text
        }

        await dispatch(thunkCreateReview(data));
        closeModal();
    }

    return (
        <div className="review-form-container">
            <h2 className="create-review-header">Review this film</h2>
        <form className="create-review-form" onSubmit={handleSubmit}>
            <label className="review-form-field">
                Like:
                <input
                    type='checkbox'
                    value={liked}
                    onChange={handleOnChange}
                    />
            </label>
            <label className="review-form-field">
                Rating:
                <ReactStars { ...changeRating } />
            </label>
            <label className="review-form-field">
                <textarea
                    value={review_text}
                    placeholder="Add a review..."
                    rows="10"
                    cols="25"
                    maxLength={10000}
                    onChange={(e) => setReview_text(e.target.value)}
                    required
                    />
            </label>
            <button className="review-button" type="submit">
                SAVE
            </button>
        </form>
                    </div>
    )
}

export default CreateReviewModal;
