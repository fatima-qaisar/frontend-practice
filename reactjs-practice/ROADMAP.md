# React JS Roadmap

## Why to learn React?
 - hype, job, trend , build UI (JQuery, JS, CSS libraries - why react?)
 - React makes it easy to manage and build complex frontend (e.g clicking a button changes lots of things)
 
 Simple page -> react is overkill - because at the end react will be compiled into a html, css, js page which is what the browser understands.

## When to learn React?
 - After mastering JS - e.g. how thread is executed in JS/ execution context/ how functions are called, executed, go to memory/ DOM manipulation etc. (When you know you don't need react but using it will make things easier)
 - most projects don't need react in the initial phase

## Why was react created?
 - Phantom message problem - Facebook - inconsistency in the UI
 - State -> managed by JS, UI -> DOM
 - there should be a way for the JS state and the DOM to talk to each other - must sync - react started here 
 - Dan Abramov - a member of the react core team - created redux (state management library) 
 - Later react was made open source - Khan Academy adopted it first then Unsplash did too

## Learning Process
 - In-depth -> Babel, fibre, Virtual DOM, diff algorithm, hydration, tree shaking -> then make projects
 - By making projects (one topic at a time) -> to-do, calculator, Github API (to see how they work we go in-depth)

## React is a library
 - framework (focuses on rules) vs library (more freedom)

## Topics to Learn
 - core of React (State or UI manipulation, JSX (we write HTML in JS)) 
 - component reusability -> was being done in PHP as well but its easier to do it in react
 - Reusing component (props) 
 - How to propagate change (hooks) -> ui mai changes reflect krne keliye -> ee.g. useState/useEffect/useMemo etc.

## Additional things
 - Router (react doesn't have router) -> react makes SPA(single page applications -> page doesn't reload -> we need url with multiple routes -> manipulation needed) -> we need to install an additional package called -> React Router DOM 
 - State management (react doesn't have this either)
    -> Redux, redux toolkit (implementation of redux), zustand, context API (gives hooks for easier state management)
 - Class based component (.bind was used a lot in react in the start)-> still there is legacy code which still works on class based components
 - BAAS(Backend as a service) Apps ->  appwrite/firebase/superbase
    ->backend likhna nhi parta you just use it -> social media clone, e-commerce app  

## After React
 - React is not a complete solution
    -> no SEO, browser render of JS -> browser generates html and css (can become slow), no routing
 - Framework -> Next JS, Gatsby, Remix -> Next JS allows you to write backend and frontend in the same framework
 - Just get to backend


