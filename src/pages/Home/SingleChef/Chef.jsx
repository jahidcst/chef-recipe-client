import React from "react";
import {FaRegThumbsUp, FaBrain, FaBook, FaNode } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {picture,name,years_of_experience,num_recipes,likes} = chef;
  return (
    <>
      <div className="pt-10">
      <div className="card bg-opacity-6 bg-sky-200 shadow-xl">
        <figure>
          <img className=""
            src={picture}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="flex gap-1 items-center"><FaBrain></FaBrain>Experience: {years_of_experience} years</p>
          <p className="flex gap-1 items-center"><FaBook></FaBook>Number Of Recipe: {num_recipes}</p>
          <p className="flex gap-1 items-center "><FaRegThumbsUp></FaRegThumbsUp> Total Like:{likes}</p>
          <div className="card-actions justify-end">
            <Link to={`chef/${chef.id}`} className="btn btn-primary">View recipe</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chef;
