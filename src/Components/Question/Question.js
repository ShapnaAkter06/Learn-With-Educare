import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ quiz }) => {
    // console.log(quiz);
    const { question, options, correctAnswer } = quiz;

    // Show Right and wrong Answer
    const getCorrectAnswer = (a, b) => {
        if (a == b) {
            toast.success('You have selected right ans', {autoClose: 500, position: 'top-center'})
        }
        else {
            toast.error('You have selected wrong ans', {autoClose: 500, position: 'top-center'})
        }
    }

    //Show right answer
    const showRightAns = () =>{
        toast.success(correctAnswer , {autoClose: 1000})
    }

    return (
        <div className='bg-gray-200 shadow-lg p-4'>
            <div className='flex justify-end'>
                <FontAwesomeIcon onClick={showRightAns} className='text-dark' icon={faEye}></FontAwesomeIcon>
            </div>
            <h2 className='text-1xl font-medium text-gray-900'>Question : {question} </h2>
            <div className='grid md:grid-cols-1'>
                {
                    options.map((option, index) => <label className='m-1' key={index}>
                        <input onClick={() => getCorrectAnswer(correctAnswer, option)} type="radio" name="clicked" id="" />
                        {option}</label>)
                }
            </div>
        </div>
    );
};

export default Question;