import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Card from '../Card/Card';

const Home = () => {

    const [reviews] = useReviews();

    return (
        <div>
            <section className='flex md:flex-row flex-col  justify-center items-center bg-white'>
                <div className="details-part mx-10">
                    <div className='mb-6'>
                        <h1 className='font-bold text-6xl text-purple-900'>Your Next Laptop</h1>
                        <h1 className='font-bold text-6xl text-blue-400'>Your Best Laptop</h1>
                    </div>
                    <p className='font-medium text-xl'>Are you looking for the best product review sites to find a reliable source of product reviews? Do you want to find a product review website to see the ratings and reviews for products you want to buy?</p>
                    <p className='text-xl font-semibold mt-4'>You have come to the right place. There are hundreds of review sites who get paid for writing reviews and cannot be trusted. In this post, we give you reliable product review websites which you see before you buy any products online.

                    </p>
                    <button className='mt-5 text-2xl font-bold bg-violet-400 border-2 p-2 rounded-lg text-white'>Live Demo</button>
                </div>
                <div className="img-part">
                    <div className=''>
                        <img className='w-100' src="pc.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className='reviews bg-slate-50 my-2'>
                <h1 className=' mb-10 text-4xl font-bold text-center'>Customer Reviews({reviews.length})</h1>
                <div className="flex justify-center items-center flex-col">
                    <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {
                            reviews.slice(0, 3).map(review => (<Card key={review.id} review={review}></Card>))
                        }
                    </div>
                    <Link className='my-12 text-2xl font-bold bg-violet-400 border-2 p-2 rounded-lg text-white' to='/reviews'>See all reviews</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;