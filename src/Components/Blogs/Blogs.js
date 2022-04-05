import React from 'react';

const Blogs = () => {
    return (
        // Question and  Answer
        <div>
            <div className='w-4/12 mb-8 mx-auto'>
                <h1 className='text-3xl font-semibold'>Write about Context Api.</h1>
                <p  className='text-xl font-semibold'>Context Api  can  transfer data (function, array, object, primitive data) to a specific component.
                    It helps us to avoid props drilling . When we use props ,we have to pass the data through a level of tree component.
                    But with the help of context api we can easily send data to any component of the tree
                </p>

            </div>
            <div className='w-4/12 mx-auto mb-4'>
                <h1  className='text-3xl font-semibold'> What is semantic tag?
                </h1>
                <p  className='text-xl font-semibold'>Semantic tag is introduced in Html5.This tag describes their meaning which readable by man and machine.
                    This tag define the different sections and layout of web pages.This tag allow  the search engines and the web browsers to better interpret
                    Some semantic tag are {'<article> <aside>, <figure>, <section>, <header>, <main>, <footer>'} </p>
            </div>
           
        </div>
    );
};

export default Blogs;