import { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";
import Card from "./components/Card";

import { fetchCatFacts } from "./services/catfacts.service";

const App = () => {
  const [catFacts, setCatFacts] = useState([]);

  const getCatFacts = async () => {
    const apiCatFacts = await fetchCatFacts();
    setCatFacts(apiCatFacts);
  };

  const getCatList = () => {
    return (
      <section className={styles.container}>
        {catFacts.map((fact) => {
          return <Card key={fact.fact} fact={fact.fact.toUpperCase()} />;
        })}
      </section>
    );
  };

  return (
    <>
      <h1 className={styles.title}> CAT FACT GENERATOR</h1>
      <Button clicked={getCatFacts} />
      <section>{getCatList()}</section>
    </>
  );
};

export default App;

//   {/* <button onClick={getCatFacts}>Click me for Cat Facts!</button> */}
//   {/* <ul>
//     {catFacts.map(fact => {
//       return <li>{fact.fact}</li>
//     })}
//  </ul> */}
//  {/* uses State to show the facts

// //  once the button is clicked, the button click calls the function which fetches from the API
// //  once button is clicked state is changed in getCatFacts and catFacts is set to new array
// // using it here, we map through the new state/catFacts and return a fact as <li></li>
// // {fact.fact} is dot notation for firstly returning each fact back via map but also then accessing the fact key in the object {map item.key}

//   }
