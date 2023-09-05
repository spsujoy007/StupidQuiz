import React from 'react';
import { useNavigate } from 'react-router-dom';

const CelibrateWelcome = () => {

    const navigate = useNavigate()

    setTimeout( () => {
        navigate('/')
    }, 2000)

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-[#e7fffd] rounded-full p-10'>
                <img className='w-[400px] h-[400px]' src="https://img1.picmix.com/output/stamp/normal/3/4/5/3/1643543_1fcd2.gif" alt="" />
            </div>
            {/* <h1 className='text-6xl text-center text-[#64CCC5] pt-[20%]'>অপেক্ষা শেষ হচ্ছে। আর কিছু সময় 🍹</h1> */}
        </div>
    );
};

export default CelibrateWelcome;