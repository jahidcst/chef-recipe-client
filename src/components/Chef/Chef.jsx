import React, { useEffect, useState } from 'react';
import { FaBrain, FaHamburger, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = () => {
    const [chefsData, setChefsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then((response) => response.json())
            .then((data) => setChefsData(data));
    }, []);

    return (
        <div className='bg-slate-300 '>
            <h3 className='text-center text-4xl font-bold pt-12 pb-8 text-purple-900'>Meet Our Chef!</h3>
            <div className='md:grid gird-cols-3 container mx-auto p-2 md:p-0 grid-cols-3 w-100  w-100 gap-4 '>
                {
                    chefsData.map(chef => (
                        <div key={chef.id} chef={chef}>
                            <div className="card bg-opacity-6 bg-sky-200 shadow-xl">
                                <figure>
                                    <img src={chef.picture} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-bold text-orange-600">{chef.name}</h2>
                                    <p className='font-normal flex items-center gap-2'><FaBrain></FaBrain> Experience: {chef.years_of_experience}</p>
                                    <p className='font-normal flex items-center gap-2'><FaHamburger></FaHamburger> Recipes: {chef.num_recipes}</p>
                                    <p className='font-normal flex items-center gap-2'><FaThumbsUp></FaThumbsUp> Likes: {chef.likes}</p>
                                    <div className="card-actions justify-end ">
                                        <Link className="btn btn-outline" to={`/recipe/${chef.id}`}>Veiw Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Chef;
