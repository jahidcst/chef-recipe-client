import React from 'react';

const RecipeDetails = ({ recipe }) => {
  const { name, cooking_method, rating, ingredients, _pic } = recipe
  const notify = (e) => {
    alert(
      'Added to Favourite')
    e.target.disabled = true
  }
  return (
    <div className="w-full bg-base-100 shadow-xl flex">
      <figure><img className='img-fluid' src={_pic} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>
          {
            ingredients.map(int => <li>{int}</li>)
          }
        </p>
        <p><span className='font-semibold'>Cooking Method:</span> {cooking_method}</p>
        <p><span className='font-semibold'>Ratings:</span>{rating}</p>
        <div className="card-actions justify-end">
          <button onClick={notify} className="btn text-green-600 badge badge-outline">Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;