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
				<NavLink exact to="/">Home</NavLink>
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
