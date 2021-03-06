import React from 'react';
import pc from './pc.png'
import useReviews from '../../Hooks/useReviews'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Home = () => {
   const [users,setUsers]=useReviews()

    return (
          <div>
                <div className='grid md:grid-cols-2 px-8 my-8'>   
                 {/* home pc pic */}
             <div className='flex justify-center  '>
                <img className='h-60  border-2 bg-slate-100 rounded-3xl py-4  drop-shadow-xl p-4' src={pc}alt="" />
             </div>
              
                   {/* home left content  */}
           <  div className='flex flex-col justify-start ml-4  items-start'>
               <h1 className='text-5xl font-bold my-4'>The Ultimate Workstation.</h1>
               <h4 className='text-2xl font-semibold'> This laptop features AMD Ryzen 5 processor ,Nvidia Geforce RTX 3090 and more cutting edge technology </h4>
               <button class="w-3/12 bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded">Live Demo</button>
             </div>
            
             
        </div>
        {/* home reviews */}
        <div className=' items-center' >
                 <h2 className='text-center text-3xl underline underline-offset-4 font-semibold '>Customer Reviews</h2>
                 <div className=' w-9/12 grid  md:grid-cols-3 gap-4 my-4 mx-auto  '>
                     {(users.map(user=><Card id={user.id} user={user}></Card>)).slice(0,3)}
                 </div>
                 <div className='w-fit mx-auto my-10' >
                 <Link to='/reviews' class="w-full bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded">See All Reviews </Link>
                 </div>
             </div>
          </div>
    );
};

export default Home;