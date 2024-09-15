#React Web Series


/**************************** Two Types of Import/Export ******************/

1. Default Export/Import
- export default Component;
- import Component from "path";

2. Named Export/Import
- export const Component;
- import {Component} from path;


/********************************* React Hooks **********************************/

Hooks => Normal JS utility functions - Written by Facebook developers. 
1. useState - Whenever a state variable updates, react re-renders the component.
2. useEffect 
<<<<<<< HEAD


/*************************** Conditional Rendering ***********************/
Rendering on the basis of a condition.

Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

// If no dependency array => useEffect is called after every render
// If dependency array is empty = [] => useEffect is called on initial render (just once)
// If dependency array is [btnName] => called everytime btnName is updated       (From Header)

# 2 types of routing in web apps
- Client side routing
- Server side routing

# Questions
1. why do we write super props in class component in react

# NEVER UPDATE STATE VARIABLES DIRECTLY

# componentDidMount() used to make an API call

Question : Why we use empty dependency array([]) with useEffect method?
Ans : Because it makes API call only once.

useEffect(()=>{
    //Api calls or any other thing
},[])

Ques. Why do we write constructor(props) and super(props) in class based component?
Ques. Why can i not use the async in the useEffect callback 

* The below all terms are the names of data splittig. *
// Chunking
// Code Splitting
// Lazy loading
// Dynamic bundling
// On demand loading
// Dynamic import

lazy() => it is a function which is given to us by react, it comes from the 'react' package and it comes as a named export
Suspense => fallback() is used in Suspense for loading meantime the main data is fetching.


Different ways to add css =>
1. SASS and SCSS
SASS and SCSS are two of the most popular CSS preprocessors. In the world of web development, SASS is an acronym for Syntactically Awesome Style Sheets, which is a preprocessor scripting language that is either interpreted or compiled into a CSS file. Often called Sassy CSS, SCSS is the main syntax for SASS, which is a build on top of the CSS syntax that already exists. 
2. STYLED CSS => Used in production ready web application.
3. Material UI
4. Bootstrap 
5. Ant Design
6. Tailwind CSS
7. Chakra UI

# Tailwind css cmd in terminal-
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Higher Order Component - This is the function that takes the component and enhances the component & then return it back.
=======
>>>>>>> 4ca42d7750791362afe2e88b95196dfe41abf8fc
