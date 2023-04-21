import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { thunkEditPoster } from "../../store/film";
import './EditPosterModal.css'

function EditPosterModal() {
    const dispatch = useDispatch();
    const film = useSelector(state => state.film.currentFilm);
    const { closeModal } = useModal();
    const [image, setImage] = useState(film.poster);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id", film.id);
        formData.append("image", image);

        setImageLoading(true);

        await dispatch(thunkEditPoster(formData));
        setImageLoading(false);
        closeModal();
    }

    return (
        <div className="image-form-container">
            <h2 className="edit-form-header">Change poster image</h2>
            <form
                className="edit-review-form"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <input
                    className="image-input-field"
                    type='file'
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <button type="submit" className="edit-button">SAVE</button>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default EditPosterModal;
