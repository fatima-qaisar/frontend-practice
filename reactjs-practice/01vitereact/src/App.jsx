import Anime from './Anime.jsx'

function App() {

  return ( // A react component can return only one parent element. If we want to return multiple elements, we can wrap them in a div or a fragment. A fragment is a special type of element that does not render any HTML. It is used to group multiple elements without adding any extra nodes to the DOM.
    <>               
    <h1>Hello React + Vite | Fatima Qaisar.</h1>
    <Anime />
    </>    // Fragment
  )
}

export default App
