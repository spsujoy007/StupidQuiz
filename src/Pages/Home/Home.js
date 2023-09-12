import React from 'react';
import Welcome from './Welcome';
import AllQuzesList from './AllQuzesList';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const myquizes = useLoaderData();
    console.log(myquizes)
    const profile = JSON.parse(localStorage.getItem('profile-sq'));

    return (
        <div className='md:max-w-[1240px] mx-auto lg:px-0 px-5 '>
            {
                !profile ?
                <Welcome></Welcome>
                :
                <div>
                    <AllQuzesList 
                        myquizes={myquizes}
                    ></AllQuzesList>
                </div>
            }
        </div>
    );
};

export default Home;