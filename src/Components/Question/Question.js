import React from 'react';

const Question = ({quiz}) => {
    console.log(quiz);
    const {question, options} = quiz
    return (
        <div className='bg-gray-200'>
            <h2>Question : {question} </h2>
            <p>Option:{options} </p>
        </div>
    );
};

export default Question;