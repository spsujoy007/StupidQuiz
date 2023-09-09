import React, { useEffect, useState } from 'react';

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
            <div className='md:grid grid-cols-3'>
            {
                quizes.map(quiz => <>
                    <div className='bg-[#0F2B40] p-5 m-3 rounded-lg border-[1px] border-[#64CCC5]' >
                        <h4 className='text-white text-[23px]'>{quiz.quiz_name}</h4>
                        <p className='text-[#64CCC5] text-lg'>এর ভেতরে মোট কুইজ সংখ্যা <span className='text-white font-bold'>{quiz.quizes.length} টি</span></p>
                    </div>
                </>)
            }
            </div>
        </div>
    );
};

export default AllQuzesList;