const API_URL = "https://catfact.ninja/facts";

export const fetchCatFacts = () => {
  return fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse.data;

      // changes STATE and fills the state array in UseState with the cat facts
      // console.log(catFacts)
      // as state (catFacts) now has info in the array, it will log as "catFacts" rather than "jsonResonse.data"
    })
    .catch((error) => {
      console.error(error);
    });
};
