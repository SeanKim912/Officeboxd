import React from 'react';
import MainPage from '../MainPage';
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import './SplashPage.css'

function SplashPage() {
    const user = useSelector(state => state.session.user);

    if (!user) {
        return (
            <>
                <div className='splash-page-container'>
                    <div className='splash-image-background'>
                        <div className='gradient-filter' />
                    </div>
                    <div className='splash-text-container'>
                        <h1 className='splash-text'>Track films you've watched.</h1>
                        <h1 className='splash-text'>Save those you want to see.</h1>
                        <h1 className='splash-text'>Tell your friends what's good.</h1>
                    </div>
                    <div className='caption'>The social network for film lovers.</div>
                </div>
                <Footer />
            </>
        )
    }
    return (
        <MainPage />
    );
}

export default SplashPage;
