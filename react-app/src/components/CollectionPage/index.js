import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkGetCollection } from '../../store/collection';
import { thunkGetAllFilms } from '../../store/film';

const CollectionPage = () => {
    const dispatch = useDispatch();
    const { collectionId } = useParams();
    const films = useSelector(state => state.film.allFilms);
    const collection = useSelector(state => state.collection.currentCollection);
    const listArr = collection?.films?.split(",").map(str => Number(str));
    const [loaded, setLoaded] = useState(false);
    console.log("RELEVANT", collectionId, collection, listArr)

    useEffect(() => {
        dispatch(thunkGetAllFilms());
        dispatch(thunkGetCollection(collectionId))
            .then(
                setLoaded(true)
            )
    }, [dispatch, loaded])

    return (
        <div>
            <h1>{collection.name}</h1>
            <h3>{collection.description}</h3>
            {listArr?.map((id) => (
                <img src={films[id].poster} />
            ))}
        </div>
    )
}

export default CollectionPage;
