import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { thunkCreateFilm } from "../../store/film";

function CreateFilmPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [imageLoading, setImageLoading] = useState(false);

    const [title, setTitle] = useState("")
    const [year, setYear] = useState(1900);
    const [poster, setPoster] = useState(null);
    const [still, setStill] = useState(null);
    const [tagline, setTagline] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [runtime, setRuntime] = useState(0);
    const [director, setDirector] = useState("");
    const [studio, setStudio] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");
    const [producer, setProducer] = useState("");
    const [writer, setWriter] = useState("");
    const [editor, setEditor] = useState("");
    const [cinematographer, setCinematographer] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("year", year);
        formData.append("poster", poster);
        formData.append("still", still);
        formData.append("tagline", tagline);
        formData.append("synopsis", synopsis);
        formData.append("runtime", runtime);
        formData.append("director", director);
        formData.append("studio", studio);
        formData.append("genre", genre);
        formData.append("language", language);
        formData.append("country", country);
        formData.append("producer", producer);
        formData.append("writer", writer);
        formData.append("editor", editor);
        formData.append("cinematographer", cinematographer);

        setImageLoading(true);

        await dispatch(thunkCreateFilm(formData));
        setImageLoading(false);
        history.push('/');
    }

    return (
        <div className="create-profile-container">
            <h1 className="create-profile-header">Add a Film</h1>
            <form
                className="create-profile-form"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className="entry-field">
                    <label>
                        Title:
                        <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={50}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Year:
                        <input
                            type='number'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Poster:
                        <input
                            type='file'
                            accept="image/*"
                            onChange={(e) => setPoster(e.target.files[0])}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Still:
                        <input
                            type='file'
                            accept="image/*"
                            onChange={(e) => setStill(e.target.files[0])}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Tagline:
                        <textarea
                            className="review-textarea"
                            value={tagline}
                            rows="6"
                            columns="25"
                            placeholder="Add a tagline..."
                            onChange={(e) => setTagline(e.target.value)}
                            maxLength={140}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Synopsis:
                        <textarea
                            className="review-textarea"
                            value={synopsis}
                            rows="10"
                            columns="25"
                            placeholder="Add a synopsis..."
                            onChange={(e) => setSynopsis(e.target.value)}
                            maxLength={500}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Runtime:
                        <input
                            type='number'
                            value={runtime}
                            onChange={(e) => setRuntime(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Director:
                        <input
                            type='text'
                            value={director}
                            onChange={(e) => setDirector(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Studio:
                        <input
                            type='text'
                            value={studio}
                            onChange={(e) => setStudio(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Genre:
                        <input
                            type='text'
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Language:
                        <input
                            type='text'
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Country:
                        <input
                            type='text'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Producer:
                        <input
                            type='text'
                            value={producer}
                            onChange={(e) => setProducer(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Writer:
                        <input
                            type='text'
                            value={writer}
                            onChange={(e) => setWriter(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Editor:
                        <input
                            type='text'
                            value={editor}
                            onChange={(e) => setEditor(e.target.value)}
                            required
                        />
                    </label>
                    <label className='profile-form-field'>
                        Cinematographer:
                        <input
                            type='text'
                            value={cinematographer}
                            onChange={(e) => setCinematographer(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="profile-button-container">
                    <button className="edit-profile-button" type="submit">
                        Submit Film
                    </button>
                </div>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default CreateFilmPage;
