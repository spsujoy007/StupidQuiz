import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const [time, setTime] = useState(10);
    const [shownumber, setShowNumber] = useState(0);
    const navigate = useNavigate()

    const primary = '#64CCC5'

    
    const updateTime = () => {
        setTimeout(() => {
            setTime(time - 1)
        } , 1000)
    }
    
    const status = localStorage.getItem('status');
    if(time >= 0 && status !== 'true'){
        updateTime();
    }

    if(time === 0)
    {
        navigate('/welcome')
        localStorage.setItem('status', true)

    }

    const lines = [
        "ওয়েলকাম টু - ষ্টুপিড কুইজ 🍾🥳",
        "একটি অজানা মজাদার জার্নি তে আপনাকে স্বাগতম 🕊️", 
        "চলুন শুরু করা যাক। 😍"
    ]

    // for(let i = 1; i < 3; i++)
    // {
    //     setShowNumber(i);
    // }
    
    setTimeout(() => {
        if(shownumber < 2){
            setShowNumber(shownumber+1);
        }

        //for continue welcome looping
        // if(shownumber >= 2){
        //     setShowNumber(0)
        // }
    }, 3000)

    const handleClickAddProfile = () => {
        const profile = [
            {
                name: "",
                bio: "",
                photoURL: "",
                verify: false,
                profile_mode: 'create'
            }
        ]

        localStorage.setItem('profile-sq', JSON.stringify(profile))

        navigate('/profile');

    }

    return (
        <div>
            
            {
                status !== 'true' ?
                <div className='flex items-center justify-center h-[85vh]'>
                    <div>
                        <h1 className={`text-[200px] text-center text-[#64CCC5]`}>{time}</h1>
                        <p className={`text-xl text-[${primary}]`}>অল্প কিছু সময় অপেক্ষা করি কেমন। 😉</p>
                    </div>
                </div>
                :
                <>
                    <div className='w-[70vw] mx-auto flex h-screen items-center justify-center'>
                        <div>
                        <h2 className={`lg:text-[80px] text-[30px] text-center text-[#64CCC5] `}>{lines[shownumber]}</h2>
                        {
                            shownumber === 2 &&
                            <div className='flex justify-center py-5'>
                                <button onClick={handleClickAddProfile} className={`text-white bg-[#379691] hover:bg-[#2e7d79] duration-150 rounded-md px-14 py-3`}>প্রফাইল বানাই 👻</button>
                            </div>
                        }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Welcome;