import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const QuizList = () => {
    const getPath = useLocation()
    const path = getPath.pathname.split('/')[2];

    const allquizes = useLoaderData([]);
    const findQuizlist = allquizes.find(quizlist => quizlist.quiz_name === path);
    console.log(findQuizlist)

    return (
        <div className='max-w-[1240px] mx-auto pl-5'>
            <div>

            </div>
        </div>
    );
};

export default QuizList;