import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';

// import components for mass shootings and home page
import Msa from './components/msa.js';
// import Home from './components/home.js';

const App = () => {
  //state for shootings
  const [msa, setMsa] = useState([]);

  // get request for shootings database
  useEffect(() => {
      axios.get(`https://rocky-savannah-90233.herokuapp.com/project3`)
          .then((response) => {
              // console.log(response.data.shooting);
              setMsa(response.data.shooting);
      });
  });

  return (
    <>
    <Msa msa={msa} />
    </>
  );
}

export default App;
