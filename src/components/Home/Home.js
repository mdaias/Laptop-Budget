import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Card from '../Card/Card';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <section className='flex md:flex-row flex-col  justify-center items-center bg-white'>
                <div className="details-part mx-10">
                    <div className='mb-6'>
                        <h1 className='font-bold text-6xl'>Your Next Laptop</h1>
                        <h1 className='font-bold text-6xl'>Your Best Laptop</h1>
                    </div>
                    <p className='font-medium text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sit nihil tenetur fuga voluptate voluptas ullam rem molestias ea assumenda!</p>
                    <button className='btn btn-warning'>explere</button>
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
                    <Link to='/reviews'>See all reviews</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;