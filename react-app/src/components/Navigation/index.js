import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetUserProfile } from '../../store/profile';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const path = useLocation();
	const sessionUser = useSelector(state => state.session.user);
	const profile = useSelector(state => state.profile.currentUserProfile);

	useEffect(() => {
		sessionUser && dispatch(thunkGetUserProfile());
	}, [dispatch]);

	if (path.pathname === "/create-profile")
		return <h1 className='alt-nav'>Complete the Form Below</h1>

	return (
		path.pathname !== "/create-profile" && (
			<ul className='navContainer'>
				<li>
					<NavLink className="title" exact to="/">
						<div className='icon'>
							<i id="play1" class="fa-solid fa-play"></i>
							<i id="play2" class="fa-solid fa-play"></i>
							<i id="play3" class="fa-solid fa-play"></i>
						</div>
						<h1 className="logo">Officeboxd</h1>
					</NavLink>
				</li>
				{isLoaded && (
					<>
						<li>
							<NavLink exact to="/my-profile">
								{sessionUser && (
									<button>Profile</button>
								)}
							</NavLink>
						</li>
						<li>
							<ProfileButton user={sessionUser} />
						</li>
					</>
				)}
			</ul>
		)
	);
}

export default Navigation;
