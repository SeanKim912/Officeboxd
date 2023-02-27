import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmList from "../FilmList";
import { thunkGetAllReviews } from "../../store/review";
import './MainPage.css'

const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetAllReviews());
    }, [dispatch])

    return (
        <>
            <h1>Main Page</h1>
            <FilmList />
        </>
    )
}

export default MainPage;
