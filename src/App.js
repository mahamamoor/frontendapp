import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';

// import components for mass shootings
import Msa from './components/msa.js';

// import Home from './components/home.js';
import Home from './components/home.js'

// import pagination msa
import Paginationmsa from './components/paginationmsa.js'

const App = () => {
  // state for home page
  const [home, setHome] = useState([])
  //state for shootings
  const [msa, setMsa] = useState([]);
  //state to show and hide home page
  const [viewHome, setViewHome] = useState(true);
  //state to show and hide msa page
  const [viewMsa, setViewMsa] = useState(false);
  // state to show and hide Modal
  const [modalIsOpen, setIsOpen] = useState(false);
  // state for current msa page
  const [currentMsaPage, setCurrentMsaPage] = useState(1);
  // state for how many posts per msa page
  const [msaPerPage, setMsaPerPage] = useState(10);
  // state for show and hide msa page numbers
  const [seeMsaPagination, setSeeMsaPagination] = useState(false)
  // shows home page and hides everything else
  const showHome = () => {
    setViewHome(true)
    setViewMsa(false)
    setSeeMsaPagination(false)
  }
  // shows msa page and hides everything else
  const showMsa = () => {
    setViewMsa(true)
    setViewHome(false)
    setSeeMsaPagination(true)
  }
  // msa pagination function
  const indexForLastPost = currentMsaPage * msaPerPage
  const indexForFirstPost = indexForLastPost - msaPerPage
  const currentDataBlurbs = msa.slice(indexForFirstPost, indexForLastPost)

  const msaPaginate = (pagenumba) => setCurrentMsaPage(pagenumba)

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
    <div className="showButtons">
      <button onClick={showHome}>Home</button>
      <button onClick={showMsa}>MSA</button>
    </div>
    <div className="home-container">
    {viewHome ? <Home/> : ""}
    </div>
    <div className="msa-container">
    {viewMsa ? <Msa msa={currentDataBlurbs}/> : ""}
    </div>
    <div>
    {seeMsaPagination ? <Paginationmsa msaPerPage={msaPerPage} totalMsaPosts={msa.length} msaPaginate={msaPaginate}/> : ""}
    </div>
    </>
  );
}

export default App;
