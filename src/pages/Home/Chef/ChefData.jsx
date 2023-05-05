import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Chef from '../SingleChef/Chef';

const ChefData = () => {
    const[chefall,setChef] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <Outlet></Outlet>
          <div className='grid lg:grid-cols-3 gap-2'>
          {
            chefall.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
           }
          </div>
        </div>
    );
};

export default ChefData;