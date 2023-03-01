import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul className='navContainer'>
			<li>
				<NavLink className="title" exact to="/">
					<img src="https://github.com/SeanKim912/Officeboxd/blob/dev/react-app/src/components/Navigation/officeboxd_logo.png" />
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
	);
}

export default Navigation;
