import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl text-blue-600 font-bold'>Question Answer</h2>
            <div className="grid grid-cols-1 gap-4 p-12">
                <div>
                    <h3 className='text-blue-800 text-2xl font-semibold'>1. What is the purpose of React Router</h3>
                    <p className='text-1xl font-medium max-w-xl mx-auto my-4'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.</p>
                </div>
                <div>
                    <h3 className='text-blue-800 text-2xl font-semibold'>2. How does Context API work?</h3>
                    <p className='text-1xl font-medium max-w-xl mx-auto my-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div>
                    <h3 className='text-blue-800 text-2xl font-semibold'>3. What is useRef? </h3>
                    <p className='text-1xl font-medium max-w-xl mx-auto my-4'>useRef is like a “box” that can hold a mutable value in its .current property. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;