import React from 'react';
// import './App.css';
import recipeImage from "./images/image-omelette.jpeg";
import "./styles-in-src.css";

const Omelette = {
  "image-src": "./images/image-omelette.jpg",
  "title": "Simple Omelette Recipe",
  "description": "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  "times": {
    "total": "Approximately 10 minutes",
    "prep": "5 minutes",
    "cook": "5 minutes"
  },
  "ingredients": [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil", 
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ], 
  "instructions": [
    {
      "span-text": "Beat the eggs",
      "main-text": "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
      "span-text": "Heat the pan",
      "main-text": "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
      "span-text": "Cook the omelette",
      "main-text": "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
      "span-text": "Add fillings (optional)",
      "main-text": "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
      "span-text": "Fold and serve",
      "main-text": "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
      "span-text": "Enjoy",
      "main-text": "Serve hot, with additional salt and pepper if needed."
    },
  ],
  "nutrition": {
    "calories": 277,
    "carbs": 0,
    "protein": 20,
    "fat": 22
  }
}

const RecipeImage = function() {
  return (
    <img src={recipeImage} className="recipe-image-main" alt="A dish made using this recipe" />
  )
}

const TitleIntro = function() {
  return (
    <div className="intro">
      <h1 className="text-preset-1">Simple Omelette Recipe</h1>
      <p className="text-preset-4">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
    </div>
  )
}

const PrepTimeBox = function() {
  return (
    <div className="prep-time-box">
      <h3 className="text-preset-3">Preparation time</h3>
      <ul className="text-preset-4">
        <li><span className="text-preset-4-bold">Total:</span> {Omelette.times.total}</li>
        <li><span className="text-preset-4-bold">Preparation:</span> {Omelette.times.prep}</li>
        <li><span className="text-preset-4-bold">Cooking:</span> {Omelette.times.cook}</li>
      </ul>
    </div>
  )
}

class IngredientsBox extends React.Component {
  render() {
    const inputList = Omelette.ingredients.map((ingredient) => {
      return (
        <li id={ingredient.slice(0,3)}>{ingredient}</li>
      )
    });
    return (
      <div className="ingredients-box">
        <h2 className="text-preset-2">Ingredients</h2>
        <ul className="text-preset-4">{inputList}</ul> 
      </div>
    )
  }
}

class InstructionsBox extends React.Component {
  render() {
    const inputList = Omelette.instructions.map((step) => {
      return(
        <li id={step['span-text'].slice(0,3)}><span className="text-preset-4-bold">{step['span-text']}:</span> {step['main-text']}</li>
      )
    })
    return (
      <div className="instructions-box">
        <h2 className="text-preset-2">Instructions</h2>
        <ol className="text-preset-4">{inputList}</ol>
      </div>
    )
  };
}

const NutritionBox = function() {
  return (
    <div className="nutrition-box">
      <h2 className="text-preset-2">Nutrition</h2>
      <table>
        <tbody>
          <tr>
            <td>Calories</td><td>{Omelette.nutrition.calories}kcal</td>
          </tr>
          <tr>
            <td>Carbs</td><td>{Omelette.nutrition.carbs}g</td>
          </tr>
          <tr>
            <td>Protein</td><td>{Omelette.nutrition.protein}g</td>
          </tr>
          <tr>
            <td>Fat</td><td>{Omelette.nutrition.fat}g</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Line = function() {
  return (
    <div className="divider-line"></div>
  )
}

function App() {
  return (
    <div className="App">
    <div className="image-main-container">
      <RecipeImage />
    </div>
    <div className="text-container">
      <TitleIntro />
      <PrepTimeBox />
      <IngredientsBox />
      <Line />
      <InstructionsBox />
      <Line />
      <NutritionBox />
    </div>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
