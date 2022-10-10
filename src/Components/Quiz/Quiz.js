import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz);
    const {name, questions} = quiz.data
    return (
        <div>
            <h2 className='text-2xl font-bold'>Quiz Of {name}</h2>
            <div>
                {
                    questions.map(question => <Question question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;