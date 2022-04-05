import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Card from '../Card/Card';
const Reviews = () => {
    const [users,setUsers]=useReviews()
    return (
        <div>
            {users.map(user=><Card id={user.id} user={user}></Card>)}
        </div>
    );
};

export default Reviews;