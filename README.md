# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The challenge is to recreate a recipe card in a responsive, well-spaced format.

### Screenshot

![Here's a screenshot of a mobile view of this solution.](https://github.com/WeatherheadOnline/fem_Recipe-page/blob/main/project_screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/reusable-react-recipe-page-Ypu3DyPHad](https://www.frontendmentor.io/solutions/reusable-react-recipe-page-Ypu3DyPHad)
- Live Site URL: [https://weatherheadonline.github.io/fem_Recipe-page/](https://weatherheadonline.github.io/fem_Recipe-page/)

## My process

I started by pulling values from the design file and adding them as CSS rules: colors as variables, @font-face rules, and classes to use as text presets.

Based on the look of the design, I decided to construct the page out of nested containers. I used React, as I'd been looking for an excuse to use it, and this project looked like it would benefit from React, eg to dynamically construct ordered or unordered lists from arrays of ingredients or of instruction steps.

In React, I started by building up the containers and elements I'd sketched out based on the design file. For reusability with other recipes, I added a recipe object. It contained all the information that's specific to this recipe: title, description, times, ingredients, instructions, and nutritional info. I referenced the object so that the text fields and the image at the top of the page are dynamically added.

Once the content was being rendered to the page, I went back and added most of the remaining CSS: margins, padding, and bullet styles. 

For the nutritional data, I had originally planned to use a `table`, but I pivoted away from that so that I could re-use my `<Line />` element. Instead, I made each row its own `div` containing two `p` elements (one containing a `span` for the bold text style), and gave each of those divs `display: grid` to allow for precise spacing of `p` elements.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to get a React app working from scratch. I learned how to get a React app to display on GitHub Pages. I learned how to get bullet points centered vertically relative to the text next to them, and how to give them a color and size:
```
ul li::marker {
  color: blue;
  font-size: 1.2rem;
}
```

### Continued development

In future I aim to get more experience using React. The current challenge was a simple one and I'd enjoy trying something slightly more complex. I've heard that class components have fallen out of style and that functional components can be used instead if they're combined with hooks, so I'd like to prioritize learning about that.

### Useful resources

- [How to create a React app](https://www.c-sharpcorner.com/article/create-your-first-react-app-in-vs-code/)
- [How to get npx working on the command line](https://dev.to/jackfd120/resolving-npm-execution-policy-error-in-powershell-a-step-by-step-guide-for-developers-32ip)
- [Microsoft docs related to getting npx working on the command line](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5) 
- [More Microsoft docs related to getting npx working on the command line](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.5)
- [React tutorials on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)
- [How to get bullet points centered vertically](https://idkshite.com/posts/vertical-center-bullet)
- [How to control the color and size of bullet points](https://forum.obsidian.md/t/css-code-to-change-color-and-size-of-bullet-points/15230/3)
- [Refresher on CSS lists](https://www.w3schools.com/css/css_list.asp)
- [How to display a React app on GitHub Pages](https://github.com/gitname/react-gh-pages)

## Author

- Website - [www.weatherheadonline.com](www.WeatherheadOnline.com)
- Frontend Mentor - [@WeatherheadOnline](https://www.frontendmentor.io/profile/WeatherheadOnline)
- LinkedIn - [@eddieweatherhead](https://www.linkedin.com/in/eddieweatherhead/)

## Acknowledgments

Huge thanks to these sources who helped me with my main roadblocks in this challenge:

- Rikam Palkar's [article](https://www.c-sharpcorner.com/article/create-your-first-react-app-in-vs-code/) on how to get a *de novo* React app up off the ground.
- [This blog post](https://idkshite.com/posts/vertical-center-bullet) that explains one simple approach to centering bullets vertically relative to the text they're next to.
- User alltagsverstand who replied to [this thread](https://forum.obsidian.md/t/css-code-to-change-color-and-size-of-bullet-points/15230/3) with a clear and concise demonstration of how to change the color and size of bullets.