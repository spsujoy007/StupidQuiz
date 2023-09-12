import React from 'react';
import './AllQuizesList.css'
import { Link } from 'react-router-dom';

const AllQuzesList = ({myquizes}) => {
    // const [quizes, setQuizes] = useState([]);
    
    
    // useEffect(() => {
    //     fetch('https://mocki.io/v1/b2f65b9d-cdd0-4ff2-b661-1622a6be9dd5')
    //     .then(res => res.json())
    //     .then((data) => {
    //         setQuizes(data)
    //     })
    // }, [])

    return (
        <div className='mt-5'>
            <div className={`grid grid-cols-2`}>
            {
                myquizes.map((q, idx) => <div key={idx}>
                    <div  className={`bg-[#d7edfd] px-5 pt-5 pb-10 m-3 rounded-lg quizPack `} >
                        <h4 className='text-black text-[20px] font-bold'>{q.quiz_name[1]}</h4>
                        <p className='text-[#0F172A] text-[16]'>এর ভেতরে মোট কুইজ সংখ্যাঃ <span className='text-[#64CCC5] font-bold'>{q.quizes.length} টি</span></p>
                        <p className='mt-3 text-blue-900'>কুইজ দিয়ে জিতে নেও রিওয়ার্ড। যা কোথাও কাজে লাগবেনা বুঝলা। 🤭</p>

                        <div className='mt-5 flex justify-end'>
                            <Link to={`/quizes/${q.quiz_name[0]}`}>
                                <button className='text-lg bg-green-500 hover:bg-green-600 duration-150 text-white px-5 py-1 rounded-md'>শুরু করে দেই</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default AllQuzesList;