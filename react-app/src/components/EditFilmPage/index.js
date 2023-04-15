import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { thunkEditFilm } from "../../store/film";
import "./EditFilmPage.css"

function EditFilmPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const film = useSelector(state => state.film.currentFilm);

    const [imageLoading, setImageLoading] = useState(false);

    const [title, setTitle] = useState(film.title)
    const [year, setYear] = useState(film.year);
    const [poster, setPoster] = useState(null);
    const [still, setStill] = useState(null);
    const [tagline, setTagline] = useState(film.tagline);
    const [synopsis, setSynopsis] = useState(film.synopsis);
    const [runtime, setRuntime] = useState(film.runtime);
    const [director, setDirector] = useState(film.director);
    const [studio, setStudio] = useState(film.studio);
    const [genre, setGenre] = useState(film.genre);
    const [language, setLanguage] = useState(film.language);
    const [country, setCountry] = useState(film.country);
    const [producer, setProducer] = useState(film.producer);
    const [writer, setWriter] = useState(film.writer);
    const [editor, setEditor] = useState(film.editor);
    const [cinematographer, setCinematographer] = useState(film.cinematographer);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("id", film.id);
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
        debugger

        await dispatch(thunkEditFilm(formData));
        setImageLoading(false);
        history.push(`/film/${film.id}`);
    }

    return (
        <div className="create-profile-container">
            <h1 className="create-profile-header">Edit Film</h1>
            <form
                className="create-profile-form"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className="entry-field">
                    <label className="film-form-field">Title</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={50}
                            required
                        />
                    <label className='film-form-field'>Year</label>
                        <input
                            className="film-input-field"
                            type='number'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Poster</label>
                        <input
                            className="film-input-field"
                            type='file'
                            accept="image/*"
                            onChange={(e) => setPoster(e.target.files[0])}
                            required
                        />
                    <label className='film-form-field'>Still</label>
                        <input
                            className="film-input-field"
                            type='file'
                            accept="image/*"
                            onChange={(e) => setStill(e.target.files[0])}
                            required
                        />
                    <label className='film-form-field'>Tagline</label>
                        <textarea
                            className="film-textarea"
                            value={tagline}
                            rows="6"
                            columns="25"
                            placeholder="Add a tagline..."
                            onChange={(e) => setTagline(e.target.value)}
                            maxLength={140}
                            required
                        />
                    <label className='film-form-field'>Synopsis</label>
                        <textarea
                            className="film-textarea"
                            value={synopsis}
                            rows="10"
                            columns="25"
                            placeholder="Add a synopsis..."
                            onChange={(e) => setSynopsis(e.target.value)}
                            maxLength={500}
                            required
                        />
                    <label className='film-form-field'>Runtime</label>
                        <input
                            className="film-input-field"
                            type='number'
                            value={runtime}
                            onChange={(e) => setRuntime(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Director</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={director}
                            onChange={(e) => setDirector(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Studio</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={studio}
                            onChange={(e) => setStudio(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Genre</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Language</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Country</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Producer</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={producer}
                            onChange={(e) => setProducer(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Writer</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={writer}
                            onChange={(e) => setWriter(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Editor</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={editor}
                            onChange={(e) => setEditor(e.target.value)}
                            required
                        />
                    <label className='film-form-field'>Cinematographer</label>
                        <input
                            className="film-input-field"
                            type='text'
                            value={cinematographer}
                            onChange={(e) => setCinematographer(e.target.value)}
                            required
                        />
                </div>
                <div className="profile-button-container">
                    <button className="edit-profile-button" type="submit">
                        SUBMIT EDIT
                    </button>
                </div>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default EditFilmPage;
