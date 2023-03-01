import React from 'react';
import MainPage from '../MainPage';
import { useSelector } from 'react-redux';
import './SplashPage.css'

function SplashPage () {
    const user = useSelector(state => state.session.user);

    if (!user) {
        return (
            <div className='splash-page-container'>
                <h1>Officeboxd Splash Page</h1>
            </div>
        )
    }
    return (
        <MainPage />
    );
}

export default SplashPage;
