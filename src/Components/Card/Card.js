import React from 'react';

const Card = ({user}) => {
    const {img,name,rating,comment}=user
    return (
        // card information
        <div className=' border-2 bg-slate-100 rounded-3xl py-4  drop-shadow-xl '>
            <img className='w-9/12 rounded-full mx-auto' src={img} alt="" />
            <h1 className='mx-auto text-lg font-medium w-fit'>{name}</h1>
            <h1 className='ml-8 w-8/12 text-lg font-medium '> <p className='text-xl font-semibold underline'>Feedback:</p> {comment}</h1>
            <h1 className='ml-8 mb-0 text-lg font-medium w-fit'>Rating : {rating}</h1>

        </div>
    );
};

export default Card;