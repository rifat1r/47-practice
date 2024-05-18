import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Oops!!!</h2>
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;