import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { thunkCreateReview } from "../../store/review";

const CreateReviewModal = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm)
    const profile = useSelector(state => state.profile.currentUserProfile)
    const { closeModal } = useModal();

    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(null);
    const [review_text, setReview_text] = useState(null);

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
        <form onSubmit={handleSubmit}>
            <label>
                Like:
                <input
                    type='checkbox'
                    value={liked}
                    onChange={handleOnChange}
                />
            </label>
            <label>
                Rating:
                <input
                    type="number"
                    value={rating}
                    min="1"
                    max="10"
                    onChange={(e) => setRating(e.target.value)}
                />
            </label>
            <label>
                <input
                    type="text"
                    value={review_text}
                    placeholder="Add a review..."
                    maxLength={10000}
                    onChange={(e) => setReview_text(e.target.value)}
                />
            </label>
            <button type="submit">
                SAVE
            </button>
        </form>
    )
}

export default CreateReviewModal;
