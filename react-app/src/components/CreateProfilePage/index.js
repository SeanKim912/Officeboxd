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
    // const [avatarUrl, setAvatarUrl] = useState("");
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
        debugger
        const formData = new FormData();
        formData.append("image", image);
        formData.append("bio", bio);
        formData.append("location", location);
        formData.append("pronoun", pronoun)

        setImageLoading(true);

        // let avatar_url = avatarUrl

        // const data = {
        //     avatar_url: image,
        //     bio,
        //     location,
        //     pronoun
        // }

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
                    <label className='profile-form-field'>
                        Avatar:
                        <input
                            type='file'
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Bio:
                        <input
                            type='text'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                            maxLength={500}
                        />
                    </label>
                    <label className='profile-form-field'>
                        Location:
                        <input
                            type='text'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Pronoun:
                        <select
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
                    </label>
                </div>
                <div className="profile-button-container">
                    <button className="edit-profile-button" type="submit">
                        Create Profile
                    </button>
                </div>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default CreateProfilePage;
