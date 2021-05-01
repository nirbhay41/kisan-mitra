import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
    return (
        <div className='notfound'>
            <div className="heading">
                <h1>404</h1>
            </div>
            <div className="gif"></div>
            <div className="end">
                <h2>Look like you're lost </h2>
                <p>The page you are looking for is not avaible</p>
                <Link to='/'><button>Go to Home</button></Link>
            </div>
        </div>
    )
};

export default NotFound;
