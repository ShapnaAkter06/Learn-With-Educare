import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
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
            <div className='flex justify-between'>
                <h2>Question : {question} </h2>
                <FontAwesomeIcon onClick={showRightAns} className='text-dark' icon={faEye}></FontAwesomeIcon>
            </div>
            <div className='grid md:grid-cols-1'>
                {
                    options.map(option => <label onClick={() => getCorrectAnswer(correctAnswer, option)}>
                        <input type="radio" name="clicked" id="" />
                        {option}</label>)
                }
            </div>
        </div>
    );
};

export default Question;