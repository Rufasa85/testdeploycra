import { useState, useEffect } from 'react';
import ResultList from './ResultList';

// Import our search method
import search from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  const [toSearch, setToSearch] = useState("")
  const [term, setTerm] = useState("kittens")
  const [joe, setJoe] = useState([1,2,3])
  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    console.log(response)
    setResults(response.data.data);
  };

  const submitForm = e=>{
    e.preventDefault();
    setTerm(toSearch);
    setToSearch("")
  }

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy(term);
  }, [term]);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <form onSubmit = {submitForm}>
        <input name="toSearch" value={toSearch} onChange={(e)=>setToSearch(e.target.value)}/>
      </form>
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultContainer;
