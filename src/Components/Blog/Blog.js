import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl text-blue-600 font-bold'>Question Answer</h2>
            <div className="grid grid-cols-1 gap-4 p-12">
                <div>
                    <h3 className='text-blue-800 text-2xl font-semibold'>1. What is the purpose of React Router</h3>
                    <p></p>
                </div>
                <div>
                    <h3 className='text-blue-800 text-2xl font-semibold'>2. How does Context API work?</h3>
                    <p></p>
                </div>
                <div>
                    <h3 className='text-blue-800 text-2xl font-semibold'>3. What is useRef? </h3>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;