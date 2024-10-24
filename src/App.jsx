import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipes from './components/OurRecipes'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [prepared, setPrepared] = useState([])

  const [totalTime, setTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)
  
  const addRecipeRoQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id

    )
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }else{
      alert('Recipe already exists in the queue.')
    }
  
// console.log(recipe);

  }
  // console.log(recipeQueue);
  


  const handleRemove = id =>{
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPrepared([...prepared, deletedRecipe])
    }


    const calculateTime = (time, calories) =>{
      setTime(totalTime + time)
      setTotalCalories(totalCalories + calories)
    }
  return (
    <>
    <div className='container mx-auto px-4'>
      {/* Header section */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* Our recipes section */}
      <OurRecipes></OurRecipes>
      {/* recipes card section */}
      <section className='flex flex-col md:flex-row gap-6'>
        {/* Cards section */}
        <Recipes addRecipeRoQueue={addRecipeRoQueue}></Recipes>
        {/* Sidebar section */}
        <Sidebar 
        recipeQueue={recipeQueue} 
        handleRemove={handleRemove} 
        prepared={prepared}
        calculateTime={calculateTime}
        totalTime={totalTime}
        totalCalories ={totalCalories}
        ></Sidebar>
      </section>
      </div>
    
    </>
  )
}

export default App
