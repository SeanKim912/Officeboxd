import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { thunkGetCollection, thunkDeleteCollection } from '../../store/collection';
import { thunkGetAllFilms } from '../../store/film';
import './CollectionPage.css'

const CollectionPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { collectionId } = useParams();
    const films = useSelector(state => state.film.allFilms);
    const collection = useSelector(state => state.collection.currentCollection);
    const listArr = collection?.films?.split(",").map(str => Number(str));
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(thunkGetAllFilms());
        dispatch(thunkGetCollection(collectionId))
            .then(
                setLoaded(true)
            )
    }, [dispatch, loaded]);

    const handleDelete = async () => {
        const data = {
            id: collection.id
        }

        await dispatch(thunkDeleteCollection(data))
            .then(
                history.push('/my-profile')
            )
    }

    return (
        <>
            <div className='collection-container'>
                <h1 className='main-film-title'>{collection.name}</h1>
                <div className='collection-review-text'>{collection.description}</div>
                <div className='collection-button-container'>
                    <NavLink exact to={'/collection/edit'}>
                        <button className='edit-profile-link-button'>EDIT</button>
                    </NavLink>
                    <button className='edit-profile-link-button' onClick={handleDelete}>DELETE</button>
                </div>
                <div className='card-container'>
                    <ul className='card-list'>
                        {listArr?.map((id) => (
                            <NavLink exact to={`/film/${id}`}>
                                <img className='film-card' src={films[id].poster} />
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CollectionPage;
