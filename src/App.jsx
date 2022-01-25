import { useState } from "react";


function App() {

  const [ catFacts, setCatFacts] = useState([]);

  const getCatFacts = () => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((jsonResponse) => {
     
        setCatFacts(jsonResponse.data);
        // changes STATE and fills the state array in UseState with the cat facts
        console.log(catFacts)
        // as state (catFacts) now has info in the array, it will log as "catFacts" rather than "jsonResonse.data"
      })
      .catch((error) => {
        console.error(error);
      })
  }

 

  return (
  <>
  <button onClick={getCatFacts}>Click me for Cat Facts!</button>
  <ul>
    {catFacts.map(fact => {
      return <li>{fact.fact}</li>
    })}
 </ul>
 {/* uses State to show the facts
  */
//  once the button is clicked, the button click calls the function which fetches from the API 
//  once button is clicked state is changed in getCatFacts and catFacts is set to new array
// using it here, we map through the new state/catFacts and return a fact as <li></li>
// {fact.fact} is dot notation for firstly returning each fact back via map but also then accessing the fact key in the object {map item.key}
  
  
  }
  </>
  );
}

export default App;
