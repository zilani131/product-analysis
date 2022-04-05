import React from 'react';

const Card = ({user}) => {
    const {img,name,rating,comment}=user
    return (
        <div className=' border-4 bg-slate-300 rounded-3xl py-4  drop-shadow-xl '>
            <img className='w-9/12 rounded-full mx-auto' src={img} alt="" />
            <h1 className='mx-auto text-lg font-medium w-fit'>{name}</h1>
            <h1 className='mx-auto text-lg font-medium w-fit'>{comment}</h1>
            <h1 className='mx-auto text-lg font-medium w-fit'>Rating : {rating}</h1>

        </div>
    );
};

export default Card;