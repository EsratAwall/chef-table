import PropTypes from "prop-types"
import { useEffect, useState } from "react";


const Recipes = ({ addRecipeRoQueue }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {
     recipes.map(recipe => (
    <div key={recipe.recipe_id} className="card bg-base-100 border-2">
  <figure className="px-8 pt-4">
    <img className="md:h-52 md:w-full rounded-xl"
      src={recipe.image}
      alt="recipe image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-lg text-gray-800 font-bold">{recipe.recipe_name}</h2>
    <p className="text-gray-600 text-base">{recipe.description}</p>
    <h3 className="text-gray-800 text-base font-semibold">Ingredients: {recipe.ingredients.length}</h3>
    <ul className="ml-6">
      {recipe.ingredients.map((item, index) => (
        <li className="list-disc text-gray-700" key={index}>{item}</li>))}
    </ul>
    <div className="flex justify-between gap-4">
    <div className="flex items-center gap-1">
    <i className="fa-solid fa-clock-rotate-left pt-1"></i>
     <p className="font-medium">{recipe.preparing_time}</p>
    </div>
  
    <div className="flex items-center gap-1">
    <i className="fa-solid fa-fire-flame-curved pt-1 text-xl"></i>
     <p className="font-medium">{recipe.calories}</p>
    </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-green-800 rounded-full px-8 text-base text-white mt-5 font-medium" onClick={() => addRecipeRoQueue(recipe)}>Want To Cook</button>
    </div>
  </div>
</div>
))
           }
         </div>
        </div>
    );
};

Recipes.propTypes ={
  addRecipeRoQueue: PropTypes.func.isRequired
}
export default Recipes;