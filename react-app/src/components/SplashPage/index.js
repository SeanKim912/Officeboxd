import React from 'react';
import MainPage from '../MainPage';
import { useSelector } from 'react-redux';

function SplashPage () {
    const user = useSelector(state => state.session.user);

    if (!user) {
        return (
            <h1>Officeboxd Splash Page</h1>
        )
    }
    return (
        <MainPage />
    );
}

export default SplashPage;
