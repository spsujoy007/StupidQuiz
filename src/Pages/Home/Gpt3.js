import React, { useState } from 'react';

const Gpt3 = () => {
    const [text, setText] = useState('')
    const [pretext, setPreText] = useState('')

    const CallFetch = async() =>{
        const url = 'https://bing-image-search1.p.rapidapi.com/images/details?insightsToken=%3CREQUIRED%3E';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da5dc19f26msh29cc2b4c175cfe3p1b0df7jsn3b2fbfc0cdbe',
                'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }


    // CallFetch()

    return (
        <div className='max-w-[1240px] mx-auto  mt-10'>
            <div className='pl-5'>
                

                <button className='bg-[#fff] px-5 text-black' onClick={CallFetch}>Post</button>
            </div>
        </div>
    );
};

export default Gpt3;