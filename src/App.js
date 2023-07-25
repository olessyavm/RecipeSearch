import './App.css';
import {useEffect, useState} from "react";
import video from './food.mp4';
import MyRecipeComp from './MyRecipeComp';


function App() {

  const MY_ID = "7236797c";
  const MY_KEY = "478790aa0e85e9525d73902245e75d72";

  const [mySearch, setMySearch] = useState ("");
  const [myRecipes, setMyRecepes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState("");
  

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      
      setMyRecepes(data.hits);
    }  
    getRecipe()
  },[wordSubmit])

  const myRecipeSearch=(e)=>{
    console.log(e.target.value)
    setMySearch(e.target.value);
  }

  const finalSearch= (e) =>{
    e.preventDefault();
    setWordSubmit(mySearch);
  }
  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search.....' onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" />
        </button>
      </div>
      {myRecipes.map((element, index) =>(
        <MyRecipeComp  key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        ingredients={element.recipe.ingredientLines} 
        calories={element.recipe.calories}/>
      ))}
    </div>
  );
}

export default App;

//https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=7236797c&app_key=478790aa0e85e9525d73902245e75d72