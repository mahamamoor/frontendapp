import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

//Importing senator component
import Senator from './components/senator'
//Importing forum component
import Forum from './components/forum'
//Importing pagination component
import Pagination from './components/pagination'
// import components for mass shootings
import Msa from './components/msa.js';
// import Home from './components/home.js';
import Home from './components/home.js'
// import pagination msa
import Paginationmsa from './components/paginationmsa.js'


const App = () => {

////////////////////////////State//////////////////////////
//State that controls visibiility of senators "page"
const [seeSenators, setSeeSenators] = useState(false)
//State that controls visibiility of forum "page"
const [seeForum, setSeeForum] = useState(false)
//State that controls visibiility of pagination
const [seePagination, setSeePagination] = useState(false)
//State for senator data
const [senator, setSenator] = useState([])
//State for forum data
const [forum, setForum] = useState([])
//States for each value in the forum data
const [newUsername, setNewUsername] = useState()
const [newAvatar, setNewAvatar] = useState()
const [newComment, setNewComment] = useState()
const [newEmoji, setNewEmoji] = useState()
//State that controls visibiility of a new post form
const [seeNewPostForm, setSeeNewPostForm] = useState(false)
//State that controls visibiility of a update post form
const [seeUpdatePostForm, setSeeUpdatePostForm] = useState(false)
//State that sets current post that is being updated
const [editPost, setEditPost] = useState({})

//State that sets current page
const [currentPage, setCurrentPage] = useState(1)
//State that sets how many posts per page
const [postsPerPage, setPostsPerPage] = useState(5)

// state for home page
const [home, setHome] = useState([])
//state for shootings
const [msa, setMsa] = useState([]);
//state to show and hide home page
const [viewHome, setViewHome] = useState(true);
//state to show and hide msa page
const [viewMsa, setViewMsa] = useState(false);
// state for current msa page
const [currentMsaPage, setCurrentMsaPage] = useState(1);
// state for how many posts per msa page
const [msaPerPage, setMsaPerPage] = useState(10);
// state for show and hide msa page numbers
const [seeMsaPagination, setSeeMsaPagination] = useState(false)
// state for nav buttons
const [seeNavButtons, setSeeNavButtons] = useState(false)
// state for NavBar
const [seeNavBar, setSeeNavBar] = useState(false)
// states for reading more on msa data
const [viewModal, setViewModal] = useState(false)
const [newCase, setNewCase] = useState()
const [newLocation, setNewLocation] = useState()
const [newAge, setNewAge] = useState()
const [newSigns, setNewSigns] = useState()
const [newRace, setNewRace] = useState()
const [newGender, setNewGender] = useState()
// state for viewing more msa data
const [viewMsaData, setViewMsaData] = useState({})
////////////////////////////State//////////////////////////

////////////////////////////Show/Hide//////////////////////////
//Shows senators and hides everything else
const showSenators = () => {
  setSeeSenators(true)
  setSeeForum(false)
  setSeePagination(false)
  setViewHome(false)
  setViewMsa(false)
  setSeeMsaPagination(false)
  setSeeNavButtons(true)
  setSeeNavBar(true)
}

//Shows forum and hides everything else
const showForum = () => {
  setSeeSenators(false)
  setSeeForum(true)
  setSeePagination(true)
  setViewHome(false)
  setViewMsa(false)
  setSeeMsaPagination(false)
  setSeeNavButtons(true)
  setSeeNavBar(true)
}

// shows msa page and hides everything else
const showMsa = () => {
    setViewMsa(true)
    setViewHome(false)
    setSeeMsaPagination(true)
    setSeePagination(false)
    setSeeForum(false)
    setSeeSenators(false)
    setSeeNavButtons(true)
    setSeeNavBar(true)

}

  // shows home page and hides everything else
  const showHome = () => {
    setViewHome(true)
    setViewMsa(false)
    setSeeMsaPagination(false)
    setSeePagination(false)
    setSeeForum(false)
    setSeeSenators(false)
    setSeeNavButtons(false)
    setSeeNavBar(false)
  }
  //Controls the visibility of creating a new post
	const toggleNewPostForm = () => {
	  if (seeNewPostForm === false) {
	    setSeeNewPostForm(true)
	  } else {
	    setSeeNewPostForm(false)
	  }
	}

//Controls the visibility of updating a specific post
  const toggleUpdatePostForm = () => {
  if (seeUpdatePostForm === false) {
    setSeeUpdatePostForm(true)
  } else {
    setSeeUpdatePostForm(false)
    setNewUsername()
    setNewAvatar()
    setNewComment()
    setNewEmoji()
    setEditPost({})
  }
}

// Toggling the state of a modal

////////////////////////////Show/Hide//////////////////////////

  // msa pagination function
const indexForLastPost = currentMsaPage * msaPerPage
const indexForFirstPost = indexForLastPost - msaPerPage
const currentDataBlurbs = msa.slice(indexForFirstPost, indexForLastPost)
const msaPaginate = (pagenumba) => setCurrentMsaPage(pagenumba)

//forum pagination function
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = forum.slice(indexOfFirstPost, indexOfLastPost)
const paginate = (pageNumber) => setCurrentPage(pageNumber)


////////////////////////////Functions to setState for each value///////////////////
//Adding new username
const newUsernameChange = (event) => {
  setNewUsername(event.target.value)
}

//Adding new avatar
const newAvatarChange = (event) => {
  setNewAvatar(event.target.value)
}

//Adding new comment
const newCommentChange = (event) => {
  setNewComment(event.target.value)
}

//Adding new emoji
const newEmojiChange = (event) => {
  setNewEmoji(event.target.value)
}
////////////////////////////Functions to setState for each value//////////////////

////////////////////////////Variables for APIBaseURL//////////////////////////
//localhost backend
const APIBaseURL = 'http://localhost:3000/project3'
//heroku backend
const APIBaseURL2 = 'https://rocky-savannah-90233.herokuapp.com/project3'
////////////////////////////Variables for APIBaseURL//////////////////////////

////////////////////////////Creates New Forum Post//////////////////////////
const newPostSubmit = (event) => {
  event.preventDefault()
  axios.post(
      `${APIBaseURL2}/forum`,
      {
        username: newUsername,
        avatar: newAvatar,
        comment: newComment,
        emoji: newEmoji
      }
    ).then(() => {
      axios
      .get(APIBaseURL2)
      .then((response) => {
          setForum(response.data.thoughts)
      })
    })
    toggleNewPostForm()
    setNewUsername()
    setNewAvatar()
    setNewComment()
    setNewEmoji()
}
////////////////////////////Creates Forum Post//////////////////////////

////////////////////////////Deletes Forum Post//////////////////////////
const postDelete = (forumData) => {
  axios
    .delete(`${APIBaseURL2}/forum/${forumData._id}`)
    .then(() => {
        axios
          .get(APIBaseURL2)
          .then((response) => {
              setForum(response.data.thoughts)
          })
      })
}
////////////////////////////Deletes Forum Post//////////////////////////

////////////////////////////Updates Forum Post//////////////////////////
const postUpdate = (event, forumData) => {
  event.preventDefault()
  axios
    .put(`${APIBaseURL2}/forum/${forumData._id}`,
      {
        username: newUsername,
        avatar: newAvatar,
        comment: newComment,
        emoji: newEmoji
      }
    ).then(() => {
        axios
          .get(APIBaseURL2)
          .then((response) => {
            console.log(response.data);
              setForum(response.data.thoughts)
          })
    })
    toggleUpdatePostForm(false)
    setNewUsername()
    setNewAvatar()
    setNewComment()
    setNewEmoji()
    setEditPost({})
}
// read more for msa data
const readMore = (event, msaData) => {
  event.preventDefault()
  axios
    .put(`${APIBaseURL2}/msa/${msaData._id}`,
      {
        case: newCase,
        location: newLocation,
        age_of_shooter: newAge,
        prior_signs_mental_health_issues: newSigns,
        race: newRace,
        gender: newGender
      }
    ).then(() => {
        axios
          .get(APIBaseURL2)
          .then((response) => {
            console.log(response.data);
              setForum(response.data.shooting)
          })
    })
    toggleModal(false)
    setViewMsaData({})
}
//Assigns the post that is being edited and when update button is clicked, toggles the update form so it is visibile for that specific post
const assignEditPost = (forumData) => {
       setEditPost(forumData);
       toggleUpdatePostForm()
 }
 const toggleModal = () => {
   if (viewModal === false) {
     setViewModal(true)
   } else {
     setViewModal(false)
     setViewMsaData({})
   }
 }
const assignMsaDataSet = (msaData) => {
        setViewMsaData(msaData);
        toggleModal()
        console.log(msaData)
        console.log(msaData._id)
  }

////////////////////////////Updates Forum Post//////////////////////////


 ////////////////////////////On Page Load//////////////////////////

//On page load get senator msa, and forum data
useEffect(() => {
  axios
  .get(APIBaseURL2)
  .then((res) => {
  setSenator(res.data.senator)
  setForum(res.data.thoughts)
  setMsa(res.data.shooting);
  })
},[])

////////////////////////////On Page Load//////////////////////////


  return (
    <>
    <div className="nav-bar">
    {seeNavBar ? <div className="showButtons">
      <button className="navButtons" onClick={showHome}>Home</button>
      <button className="navButtons" onClick={showMsa}>MSA</button>
      <button className="navButtons" onClick={showForum}>Forum</button>
      <button className="navButtons" onClick={showSenators}>Senators</button>
    </div> : ""}
    <div className="home-page-header">
    {viewHome ? <h1 className="title-header">America's Gun Problem</h1> : ""}
    {viewMsa ? <h1 className="title-header">Mass Shootings in America</h1> : ""}
    {seeSenators ? <h1 className="title-header">Senators</h1> : ""}
    {seeForum ? <h1 className="title-header">Mental Health Forum</h1> : ""}
    </div>
    </div>
    : "" }
    <div className="home-container">
    {viewHome ? <Home showHome={showHome} showMsa={showMsa} showForum={showForum} showSenators={showSenators}/> : ""}
    </div>
    <div className="msa-container">
    {viewMsa ? <Msa msa={currentDataBlurbs} assignMsaDataSet={assignMsaDataSet} shooting={msa} toggleModal={toggleModal} readMore={readMore} viewMsaData={viewMsaData} viewModal={viewModal}/> : ""}
    </div>
    <div>
    {seeMsaPagination ? <Paginationmsa msaPerPage={msaPerPage} totalMsaPosts={msa.length} msaPaginate={msaPaginate}/> : ""}
    </div>
    <div className="senators-page">
          {seeSenators ? <Senator senator={senator}/> : ""}
      </div>
      <div className="forum-container">
            {seeForum ? <Forum toggleNewPostForm={toggleNewPostForm} forum={forum} newPostSubmit={newPostSubmit} newUsernameChange={newUsernameChange} newAvatarChange={newAvatarChange} newCommentChange={newCommentChange} newEmojiChange={newEmojiChange} seeNewPostForm={seeNewPostForm} postDelete={postDelete} assignEditPost={assignEditPost} editPost={editPost} seeUpdatePostForm={seeUpdatePostForm} postUpdate={postUpdate} toggleUpdatePostForm={toggleUpdatePostForm} forum={currentPosts}/> : ""}
      </div>
      <div>
          {seePagination ? <Pagination postsPerPage={postsPerPage} totalPosts={forum.length} paginate={paginate}/> : ""}
      </div>
    </>
  )
}

export default App;
