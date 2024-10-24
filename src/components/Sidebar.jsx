
import PropTypes from 'prop-types'
const Sidebar = ({ recipeQueue, handleRemove, prepared, calculateTime, totalTime, totalCalories }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want to cook table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 p-3 mx-auto font-semibold text-xl text-gray-800 text-center">Want To Cook: {recipeQueue.length}</h2>
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQueue.map((recipe, index) => (
        <tr className="hover" key={index}>
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time} Min</td>
        <td>{recipe.calories} Calories</td>
        <td> 
        <button 
         onClick={() =>{handleRemove(recipe.recipe_id) 
          calculateTime(recipe.preparing_time,
                 recipe.calories)}}
                 className=" bg-green-800 rounded-full px-2 py-1 md:px-4 md:py-2 text-base text-white my-2 font-medium">Preparing</button>
         </td>
       
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
            {/* currently cooking table */}


            <div className="overflow-x-auto mt-10">
                <h2 className="border-b-2 p-3 mx-auto font-semibold text-xl text-gray-800 text-center">Currently Cooking: {prepared.length}</h2>
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {
        prepared.map((recipe, index) => (
        <tr className="hover" key={index}>
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>
        ))
      }
      <tr className="border-none">
        <th></th>
        <td></td>
        <td>Total Time = {totalTime}</td>
        <td>Total Calories = {totalCalories}</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    )
};
Sidebar.propTypes ={
  sidebar: PropTypes.func.isRequired
}

export default Sidebar;