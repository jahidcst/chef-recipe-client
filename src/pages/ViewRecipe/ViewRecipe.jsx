import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

const ViewRecipe = () => {
  const chef = useLoaderData();
  const { name,picture,years_of_experience,num_recipes,likes,description } = chef;
  const recipe = chef.recipes;
  return (
    <div>
      <div className=" bg-base-100 shadow-xl hero-content flex-col lg:flex-row">
        <figure>
          <img className=" card w-[2500px] h-[450px]"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <p>Experience: {years_of_experience}</p>
          <p>Number Of Recipes: {num_recipes}</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 p-4">
        {
            recipe.map(recipe => <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>)
        }
      </div>
    </div>
  );
};

export default ViewRecipe;
