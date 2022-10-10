import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, logo, name } = course
    return (
        <div className='bg-white border-solid border-2 border-indigo-200 shadow-lg shadow-gray-400 course'>
            <img className='object-cover w-full h-52 mb-2 rounded shadow-lg md:h-64 xl:h-80 bg-gray-500' src={logo} alt="Polaroid camera" />
            <p>Updated : 10/ 09/ 23 </p>
            <h2 className='text-2xl font-semibold'>Course Name : {name}</h2>
            <Link to={`/quiz/${id}`}>
                <button
                    className='px-8 mb-4 mt-4 py-3 font-semibold rounded-full bg-sky-300 text-gray-800 hover:bg-cyan-400'
                >Start Practice</button>
            </Link>
        </div>
    );
};

export default Course;