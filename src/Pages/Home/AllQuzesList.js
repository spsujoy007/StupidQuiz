import React, { useEffect, useState } from 'react';
import './AllQuizesList.css'

const AllQuzesList = () => {
    const [quizes, setQuizes] = useState([]);
    console.log('hello')
    
    useEffect(() => {
        fetch('https://mocki.io/v1/b2f65b9d-cdd0-4ff2-b661-1622a6be9dd5')
        .then(res => res.json())
        .then((data) => {
            setQuizes(data)
            console.log(data)
        })
    }, [])

    return (
        <div className='mt-5'>
            <div className={`grid grid-cols-2`}>
            {
                quizes.map((q, idx) => <div key={idx}>
                    <div  className={`bg-[#d7edfd] px-5 pt-5 pb-10 m-3 rounded-lg quizPack `} >
                        <h4 className='text-black text-[20px] font-bold'>{q.quiz_name}</h4>
                        <p className='text-[#0F172A] text-[16]'>এর ভেতরে মোট কুইজ সংখ্যাঃ <span className='text-[#64CCC5] font-bold'>{q.quizes.length} টি</span></p>
                        <p className='mt-3 text-blue-900'>কুইজ দিয়ে জিতে নেও রিওয়ার্ড। যা কোথাও কাজে লাগবেনা বুঝলা। 🤭</p>

                        <div className='mt-5 flex justify-end'>
                            <button className='text-lg bg-green-500 hover:bg-green-600 duration-150 text-white px-5 py-1 rounded-md'>শুরু করে দেই</button>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default AllQuzesList;