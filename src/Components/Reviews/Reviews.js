import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Card from '../Card/Card';
const Reviews = () => {
    const [users,setUsers]=useReviews()
    // Reviews page
    return (
        <div className=' w-9/12 grid md:grid-cols-3 gap-4 my-4 mx-auto '>
            {users.map(user=><Card id={user.id} user={user}></Card>)}
        </div>
    );
};

export default Reviews;