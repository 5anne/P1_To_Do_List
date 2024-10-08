import React from 'react';
import homeImg from '../../../../src/assets/3327597.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center max-w-sm mx-auto mt-10'>
                <img src={homeImg} alt="" />
            </div>
            <h1 className='text-center text-[#264348] font-bold text-3xl mt-4'>Get Organized Your Life</h1>
            <p className='text-center text-[#264348] text-sm mt-4'>Todo is an efficient app to manage tasks in your day-to-day life. Make your life easier using this app.</p>
            <div className='flex justify-center items-center my-8'>
                <Link to='/signup'><button type="button" class="btn bg-[#264348] text-white">Get Started</button></Link>
            </div>
        </div>
    );
};

export default Home;