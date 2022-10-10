import React from 'react';

const Question = ({quiz}) => {
    // console.log(quiz);
    const {question, option} = quiz
    return (
        <div>
            <h2>Question : {question} </h2>
            <p>{option}</p>
        </div>
    );
};

export default Question;