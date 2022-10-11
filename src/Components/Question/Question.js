import React from 'react';

const Question = ({ quiz }) => {
    console.log(quiz);
    const { question, options } = quiz
    return (
        <div className='bg-gray-200 shadow-lg p-4'>
            <h2>Question : {question} </h2>
            <div className='grid md:grid-cols-1'>
                {
                    options.map(option => <label>
                        <input type="checkbox" name="" id="" />
                        {option}</label>)
                }
            </div>
        </div>
    );
};

export default Question;