import React from 'react';
import useReviews from '../../hooks/useReviews';

const Home = () => {

    const [reviews, setReviews] = useReviews();
    const { name, picture } = reviews;

    return (
        <div>
            <section className='flex flex-row justify-center items-center'>
                    <div className="details-part">
                        <div className=''>
                            <h1 className='text-6xl'>Your Next Laptop</h1>
                            <h1 className='text-6xl'>Your Best Laptop</h1>
                        </div>
                        <p className='text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sit nihil tenetur fuga voluptate voluptas ullam rem molestias ea assumenda!</p>
                        <button className='btn btn-warning'>explere</button>
                    </div>
                    <div className="img-part">
                        <div className=''>
                            <img className='w-100' src="pc.jpg" alt="" />
                        </div>
                    </div>
            </section>
            <section className='reviews container text-center'>
                <h1>Customer Reviews({reviews.length})</h1>
                {
                    reviews.map(review =>console.log(review))
                }
            </section>
        </div>
    );
};

export default Home;