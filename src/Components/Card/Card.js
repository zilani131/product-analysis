import React from 'react';

const Card = ({user}) => {
    const {img,name,rating,comment}=user
    return (
        <div className=' border-4 bg-slate-300 rounded-lg py-4  drop-shadow-2xl '>
            <img className='w-9/12 rounded-full mx-auto' src={img} alt="" />
            <h1 className='mx-auto w-fit'>{name}</h1>
            <h1 className='mx-auto w-fit'>{comment}</h1>
            <h1 className='mx-auto w-fit'>{rating}</h1>

        </div>
    );
};

export default Card;