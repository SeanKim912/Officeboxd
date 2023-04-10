import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { thunkGetCollection, thunkDeleteCollection } from '../../store/collection';
import { thunkGetAllFilms } from '../../store/film';

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
        <div>
            <h1>{collection.name}</h1>
            <h3>{collection.description}</h3>
            <div>
                <NavLink exact to={'/collection/edit'}>
                    <button>Edit Collection</button>
                </NavLink>
                <button onClick={handleDelete}>Delete Collection</button>
            </div>
            {listArr?.map((id) => (
                <img src={films[id].poster} />
            ))}
        </div>
    )
}

export default CollectionPage;
