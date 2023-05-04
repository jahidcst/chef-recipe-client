import React, { useEffect, useState } from 'react';

const Chef = () => {
    const [chefsData, setChefsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then((response) => response.json())
            .then((data) => setChefsData(data));
    }, []);

    return (
        <div>
            <h3>Meet Our Chef!</h3>
            <div className='md:grid gird-cols-3 container mx-auto p-4 md:p-0'>
                {
                    chefsData.map(chef => (
                        <div key={chef.id} chef={chef}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
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
