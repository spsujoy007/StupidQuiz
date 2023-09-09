import React from 'react';
import Welcome from './Welcome';
import AllQuzesList from './AllQuzesList';

const Home = () => {
    
    const profile = JSON.parse(localStorage.getItem('profile-sq'));

    return (
        <div className='md:max-w-[1240px] mx-auto lg:px-0 px-5 '>
            {
                !profile ?
                <Welcome></Welcome>
                :
                <div>
                    <AllQuzesList></AllQuzesList>
                </div>
            }
        </div>
    );
};

export default Home;