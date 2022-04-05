import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className="row g-5">
                <div className='col-md-6 col-12'>
                    <h1 className='fs-1'>What is Context api?</h1>
                    <p className='fs-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='col-md-6 col-12'>
                    <h1 className='fs-1'>What are semantic elements?
                    </h1>
                    <p className='fs-5'>Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;