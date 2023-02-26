import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetUserProfile } from "../../store/profile";
import { NavLink } from "react-router-dom";
import './ProfilePage.css'

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const myProfile = useSelector(state => state.profile.currentUserProfile);

    useEffect(() => {
        dispatch(thunkGetUserProfile());
    }, [dispatch])

    function addDefaultSrc(ev) {
		ev.target.src = 'https://imgs.search.brave.com/oVFSsx09hyfUNAQYm3bjReCAtxnhkPdYw5Hx4R9GnuQ/rs:fit:820:861:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzIw/Mi0yMDI0NzkyX3By/b2ZpbGUtaWNvbi1w/bmcucG5n'
	}

    return (
        <>
            <h1>My Profile</h1>
            <div>{user?.username}</div>
            <NavLink to={'/edit-profile'}>
                <button>Edit Profile</button>
            </NavLink>
            <img className="pfp" onError={addDefaultSrc} src={myProfile.avatar_url} />
            <div>{myProfile.pronoun}</div>
            <div>{myProfile.location}</div>
            <div>{myProfile.bio}</div>
        </>
    )
}

export default ProfilePage;
