import React from 'react';
import recipeImage from "./images/image-omelette.jpeg";
import "./styles-in-src.css";

const Omelette = {
  "image-src": recipeImage,
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

const Line = function() {
  return (
    <div className="divider-line"></div>
  )
}

const TitleIntro = function() {
  return (
    <div className="intro">
      <h1 className="text-preset-1">{Omelette.title}</h1>
      <p className="text-preset-4">{Omelette.description}</p>
    </div>
  )
}

class PrepTimeBox extends React.Component {
  render() {
    const inputTimes = [
      ["Total", Omelette.times.total],
      ["Preparation", Omelette.times.prep],
      ["Cooking", Omelette.times.cook]
    ];
    const compileTimes = inputTimes.map((time) => {
      return (
        <li>
          <span className="li-container">
            <span className="text-preset-4-bold">{time[0]}: </span>{time[1]}
          </span>
        </li>
      )
    });
    return (
      <div className="prep-time-box">
        <h2 className="text-preset-3">Preparation time</h2>
        <ul className="text-preset-4">{compileTimes}
        </ul>
      </div>
    )
  }
}

class IngredientsBox extends React.Component {
  render() {
    const inputList = Omelette.ingredients.map((ingredient) => {
      return (
        <li id={ingredient.slice(0,3)}>
          <span className="li-container">{ingredient}</span>
        </li>
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
      <p className="text-preset-4">The table below shows nutritional values per serving without the additional fillings.</p>
      <div className="nutrition-table text-preset-4">
        <div className="nutrition-table-row">
          <p>Calories</p><span class="text-preset-4-bold">{Omelette.nutrition.calories}kcal</span>
        </div>
        <Line />
        <div className="nutrition-table-row">
          <p>Carbs</p><p><span class="text-preset-4-bold">{Omelette.nutrition.carbs}g</span></p>
        </div>
        <Line />
        <div className="nutrition-table-row">
          <p>Protein</p><p><span class="text-preset-4-bold">{Omelette.nutrition.protein}g</span></p>
        </div>
        <Line />
        <div className="nutrition-table-row">
          <p>Fat</p><p><span class="text-preset-4-bold">{Omelette.nutrition.fat}g</span></p>
        </div>
      </div>
    </div>
  )
}

const RecipeImage = function() {
  return (
    <div className="image-main-container">
      <img src={Omelette['image-src']} className="recipe-image-main" alt="A dish made using this recipe" />
    </div>
  )
}

const RecipeCard = function() {
  return (
    <div className="recipe-card">
    <RecipeImage />
    <div className="text-container">
      <TitleIntro />
      <PrepTimeBox />
      <IngredientsBox />
      <Line />
      <InstructionsBox />
      <Line />
      <NutritionBox />
    </div>
  </div>
  )
}

const Attribution = function() {
  return (
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.weatherheadonline.com">Eddie Weatherhead</a>.
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <RecipeCard />
      <Attribution />
    </div>
  );
}

export default App;
