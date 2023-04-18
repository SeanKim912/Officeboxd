import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { thunkCreateProfile } from "../../store/profile";
import './CreateProfilePage.css'

function CreateProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [pronoun, setPronoun] = useState("");

    const pronounChoices = [
        "",
        "He / his",
        "She / her",
        "They / their",
        "He / their",
        "She / their",
        "Xe / xyr",
        "Ze / hir",
        "Ze / zir",
        "It / its"
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("bio", bio);
        formData.append("location", location);
        formData.append("pronoun", pronoun);

        setImageLoading(true);

        await dispatch(thunkCreateProfile(formData));
        setImageLoading(false);
        history.push('/')
    }

    return (
        <div className="create-profile-container">
            <h1 className="create-profile-header">Create Profile</h1>
            <form
                className="create-profile-form"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className="entry-field">
                    <div className="profile-input-row">
                        <label className='profile-form-field'>Avatar</label>
                        <input
                            className="profile-input-field"
                            type='file'
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </div>
                    <div className="profile-input-row">
                        <label className='profile-form-field'>Bio</label>
                        <textarea
                            className="profile-input-field"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Introduce yourself!"
                            required
                            maxLength={500}
                            rows="5"
                            cols="25"
                        />
                    </div>
                    <div className="profile-input-row">
                        <label className='profile-form-field'>Location</label>
                        <input
                            className="profile-input-field"
                            type='text'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="profile-input-row">
                        <label className='profile-form-field'>Pronoun</label>
                        <select
                            className="profile-input-field"
                            type='text'
                            name='pronoun'
                            value={pronoun}
                            onChange={(e) => setPronoun(e.target.value)}
                            required
                        >
                            {pronounChoices.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="profile-button-container">
                    <button className="edit-profile-button" type="submit">
                        CREATE PROFILE
                    </button>
                </div>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default CreateProfilePage;
