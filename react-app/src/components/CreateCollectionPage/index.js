import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetAllFilms } from "../../store/film";
import { thunkCreateCollection } from "../../store/collection";

const CreateCollectionPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allFilms = useSelector(state => state.film.allFilms);
    const filmsArr = Object.values(allFilms);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [films, setFilms] = useState("");
    const preSubmitFilm = []

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            description,
            films
        }

        await dispatch(thunkCreateCollection(data));
        history.push('/my-profile')
    }


    useEffect(() => {
        dispatch(thunkGetAllFilms());
    }, [dispatch]);

    return (
        <div className="create-collection-container">
            <h1 className="create-profile-header">Create Collection</h1>
            <form
                className="create-collection-form"
                onSubmit={handleSubmit}
            >
                <div className="entry-field">
                    <label className="profile-form-field">
                        Name:
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            maxLength={100}
                        />
                    </label>
                    <label className="profile-form-field">
                        Description:
                        <textarea
                            className="review-textarea"
                            value={description}
                            placeholder="Add a description..."
                            rows="10"
                            cols="25"
                            maxLength={10000}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Add films:
                        <div className="card-container">
                            {preSubmitFilm.map((id) => {
                                return (
                                    <img className="film-card" src={allFilms[id].poster} />
                                )
                            })}
                        </div>
                        <div className="card-container">
                            <ul className="card-list">
                                {filmsArr.map((film) => {
                                    return (
                                        <img className="film-card" src={film.poster} onClick={preSubmitFilm.push(film.id)}/>
                                    )
                                })}
                            </ul>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CreateCollectionPage;
