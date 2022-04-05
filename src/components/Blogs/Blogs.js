import React from 'react';

const Blogs = () => {
    return (
        <div className='my-5'>
            <div className="md:flex justify-center items-center mx-10">
                <div className='mx-4'>
                    <h1 className='text-center text-3xl font-bold'>What is Context api?</h1>
                    <p className='text-xl mt-5 font-semibold font-mono'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='mx-4'>
                    <h1 className='text-center text-3xl font-bold'>What are semantic elements?
                    </h1>
                    <p className='text-xl mt-5 font-semibold font-mono'>Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;