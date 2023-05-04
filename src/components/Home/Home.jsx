import React from 'react';
import Chef from '../Chef/Chef';



const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?w=900&t=st=1683043134~exp=1683043734~hmac=7df8d0b1425453a069fe1f46d67450b93fb590fffffba414587c3541dc491504")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className=" pr-96 text-start text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To <span className='text-orange-600'>COOKBOOKS</span></h1>
                        <p className="mb-5">The culinary expart that your fine dining restaurant has been waiting for. Set the table for a successful online venture with ease..!</p>
                        <button className="btn btn-outline text-white">About Us</button>
                    </div>
                </div>
            </div>
            <div>
                <Chef></Chef>
            </div>
        </div>
    );
};

export default Home;