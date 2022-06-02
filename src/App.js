import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

//Importing senator component
import Senator from './components/senator'

//Importing forum component
import Forum from './components/forum'


const App = () => {

//State that controls visibiility of senators "page"
const [seeSenators, setSeeSenators] = useState(false)

//State that controls visibiility of forum "page"
const [seeForum, setSeeForum] = useState(false)

//State that controls visibiility of forum "page"
const [seeHome, setSeeHome] = useState(true)

//State for senator data
const [senator, setSenator] = useState([])

//State for forum data
const [forum, setForum] = useState([])

//Shows senators and hides everything else
const showSenators = () => {
  setSeeSenators(true)
  setSeeForum(false)
  setSeeHome(false)
}

//Shows forum and hides everything else
const showForum = () => {
  setSeeSenators(false)
  setSeeForum(true)
  setSeeHome(false)
}

//Shows home and hides everything else
const showHome = () => {
  setSeeSenators(false)
  setSeeForum(false)
  setSeeHome(true)
}




//Pulls in the senator data
const getSenator = () => {
  	  axios.get('https://rocky-savannah-90233.herokuapp.com/project3').then((res) => {
  	    setSenator(res.data.senator)
  	 })
}

//Pulls in the forum data
const getForum = () => {
      axios.get('https://rocky-savannah-90233.herokuapp.com/project3').then((res) => {
      setForum(res.data.thoughts)
    })
}


//On page load get senator and forum data
useEffect(() => {
  getSenator()
  getForum()
},[])


  return (
    <>
      <div className="showButtons">
        <button onClick={showForum}>Forum</button>
        <button onClick={showSenators}>Senators</button>
        <button onClick={showHome}>Home</button>
      </div>
      <div className="senators-container">
        {senator.map((senator) => {
          return (
            <>
            {seeSenators ? <Senator senator={senator}/> : ""}
            </>
          )
        })}
      </div>
      <div className="forum-container">
        {forum.map((forum) => {
          return (
            <>
            {seeForum ? <Forum forum={forum}/> : ""}
            </>
          )
        })}
      </div>
  </>
  )
}

export default App;
