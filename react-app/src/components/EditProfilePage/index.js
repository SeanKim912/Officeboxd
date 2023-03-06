import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { thunkEditProfile } from "../../store/profile";
import { logout } from "../../store/session";
import { thunkDeleteProfile } from "../../store/profile";
import './EditProfilePage.css'

function EditProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentInfo = useSelector(state => state.profile.currentUserProfile);

    const [avatarUrl, setAvatarUrl] = useState(currentInfo.avatar_url);
    const [bio, setBio] = useState(currentInfo.bio);
    const [location, setLocation] = useState(currentInfo.location);
    const [pronoun, setPronoun] = useState(currentInfo.pronoun);

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

        let avatar_url = avatarUrl

        const data = {
            avatar_url,
            bio,
            location,
            pronoun
        }

        await dispatch(thunkEditProfile(data));
        history.push('/my-profile')
    }

    async function handleDelete() {
        const awaitedData = await dispatch(thunkDeleteProfile());
        if (awaitedData) {
            await dispatch(logout());
            history.push("/");
        }
    }

    return (
        <div className="edit-profile-container">
            <h1 className="edit-profile-header">Edit Profile</h1>
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <div className="entry-field">
                    <label className='edit-profile-field'>
                        Avatar:
                        <input
                            type='url'
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}
                            required
                        />
                    </label>
                    <label className='edit-profile-field'>
                        Bio:
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                            maxLength={500}
                            rows="5"
                            cols="25"
                        />
                    </label>
                    <label className='edit-profile-field'>
                        Location:
                        <input
                            type='text'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </label>
                    <label className='edit-profile-field'>
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
                        EDIT PROFILE
                    </button>
                    <button className="edit-profile-button" onClick={handleDelete}>
                        DELETE PROFILE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProfilePage;
