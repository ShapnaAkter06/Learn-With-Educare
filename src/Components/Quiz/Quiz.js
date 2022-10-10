import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    const {name, questions, options} = quiz.data
    return (
        <div>
            <h2 className='text-2xl font-bold'>Quiz Of {name}</h2>
            <div className='grid md:grid-cols-1 gap-4 p-8'>
                {
                    questions.map(quiz => <Question quiz={quiz} key={quiz.id}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;