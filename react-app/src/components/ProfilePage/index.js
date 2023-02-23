import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetUserProfile } from "../../store/profile";

const ProfilePage = () => {
    const dispatch = useDispatch()
    const myProfile = useSelector(state => state.profile.currentUserProfile)

    useEffect(() => {
        dispatch(thunkGetUserProfile())
    }, [dispatch])

    return (
        <>
            <h1>My Profile</h1>
        </>
    )
}

export default ProfilePage;
