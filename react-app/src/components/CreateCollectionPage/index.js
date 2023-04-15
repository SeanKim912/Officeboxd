import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetAllFilms } from "../../store/film";
import { thunkCreateCollection } from "../../store/collection";
import './CreateCollectionPage.css';

const CreateCollectionPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allFilms = useSelector(state => state.film.allFilms);
    const filmsArr = Object.values(allFilms);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [preSubmitFilm, setPreSubmitFilm] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            description,
            films: preSubmitFilm.join(",")
        }


        if (preSubmitFilm.length >= 2) {
            await dispatch(thunkCreateCollection(data))
            history.push('/my-profile')
        } else {
            setErrors(["Collections must have at least two films"])
        }
    }


    useEffect(() => {
        dispatch(thunkGetAllFilms());
    }, [dispatch, preSubmitFilm, toggle]);

    return (
        <>
            <div className="create-collection-container">
                <h1 className="create-profile-header">Create Collection</h1>
                <form
                    className="create-collection-form"
                    onSubmit={handleSubmit}
                >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className="collection-entry-field">
                        <div className="collection-entry-row">
                            <label className="profile-form-field">Name</label>
                            <input
                                className="profile-input-field"
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                maxLength={100}
                            />
                        </div>
                        <div className="collection-entry-row">
                            <label className="profile-form-field">Description</label>
                            <textarea
                                className="profile-input-field"
                                value={description}
                                placeholder="Add a description..."
                                rows="10"
                                cols="25"
                                maxLength={10000}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="add-films-container">
                        <label className="profile-form-field">ADD FILMS:</label>
                        {!preSubmitFilm.length && (
                            <div className="empty-list-text">Click on films below to add them to this list!</div>
                        )}
                        <div className="presubmit-container">
                            <div className="card-container">
                                <ul className="card-list">
                                    {preSubmitFilm?.map((id) => {
                                        return (
                                            <img className="film-card"
                                                src={allFilms[id]?.poster}
                                                onClick={(e) => {
                                                    setPreSubmitFilm(preSubmitFilm.toSpliced(preSubmitFilm.indexOf(id), 1))
                                                }}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="card-container">
                            <ul className="card-list">
                                {filmsArr.map((film) => {
                                    return (
                                        <img className="film-card"
                                            src={film.poster}
                                            onClick={(e) => {
                                                if (!preSubmitFilm.includes(film.id)) {
                                                    setPreSubmitFilm(preSubmitFilm.concat([film.id]))
                                                }
                                                setToggle(!toggle)
                                            }
                                            }
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="profile-button-container">
                        <button className="edit-profile-button" type="submit">
                            CREATE COLLECTION
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateCollectionPage;
