import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    // console.log(course);
    const { id, logo, name, total } = course
    return (
        <div className='bg-white border-solid border-2 border-indigo-200 shadow-lg shadow-gray-400 course'>
            <img className='object-cover w-full h-52 mb-2 rounded shadow-lg md:h-64 xl:h-80 bg-gray-500' src={logo} alt="Polaroid camera" />
            <p>Updated : 10/ 09/ 23 </p>
            <h2 className='text-2xl font-semibold'>Course Name : {name}</h2>
            <div className='flex items-center justify-between px-12'>
            <p className='text-1xl font-medium'>Total Question: {total} </p>
            <Link to={`/quiz/${id}`}>
                <button
                    className='px-8 mb-4 mt-4 py-3 font-semibold rounded-full bg-sky-300 text-gray-800 hover:bg-cyan-400'
                >Start Practice</button>
            </Link>
            </div>
        </div>
    );
};

export default Course;