import React from 'react';

const Card = ({ review }) => {

    const {name,rating,comment,picture} = review;

    return (
        <div className=' shadow-lg rounded-2xl w-[350px] bg-white p-4'>
            <div className="div flex justify-evenly items-center">
                <img className=' w-20 rounded-full' src={picture} alt="" />
                <h1 className='text-xl font-bold text-cyan-900'>{name}</h1>
            </div>
            <div>
                <h2 className='my-4 text-center font-bold text-cyan-900'>Rating: {rating} Star</h2>
                <h3 className='my-3 text-orange-500 text-left font-bold'>Verified Purchase</h3>
                <p className='font-semibold'>{comment}</p>
            </div>

        </div>
    );
};

export default Card;