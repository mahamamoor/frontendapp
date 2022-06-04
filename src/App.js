import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap'

//Importing senator component
import Senator from './components/senator'

//Importing forum component
import Forum from './components/forum'


const App = () => {

////////////////////////////State//////////////////////////
//State that controls visibiility of senators "page"
const [seeSenators, setSeeSenators] = useState(false)
//State that controls visibiility of forum "page"
const [seeForum, setSeeForum] = useState(false)
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
////////////////////////////State//////////////////////////

////////////////////////////Show/Hide//////////////////////////
//Shows senators and hides everything else
const showSenators = () => {
  setSeeSenators(true)
  setSeeForum(false)
}

//Shows forum and hides everything else
const showForum = () => {
  setSeeSenators(false)
  setSeeForum(true)
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
////////////////////////////Show/Hide//////////////////////////

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
      `${APIBaseURL}/forum`,
      {
        username: newUsername,
        avatar: newAvatar,
        comment: newComment,
        emoji: newEmoji
      }
    ).then(() => {
      axios
      .get(APIBaseURL)
      .then((response) => {
          setForum(response.data.thoughts)
      })
    })
    toggleNewPostForm()
}
////////////////////////////Creates Forum Post//////////////////////////

////////////////////////////Deletes Forum Post//////////////////////////
const postDelete = (forumData) => {
  axios
    .delete(`${APIBaseURL}/forum/${forumData._id}`)
    .then(() => {
        axios
          .get(APIBaseURL)
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
    .put(`${APIBaseURL}/forum/${forumData._id}`,
      {
        username: newUsername,
        avatar: newAvatar,
        comment: newComment,
        emoji: newEmoji
      }
    ).then(() => {
        axios
          .get(APIBaseURL)
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
}

//Assigns the post that is being edited and when update button is clicked, toggles the update form so it is visibile for that specific post
const assignEditPost = (forumData) => {
       setEditPost(forumData);
       toggleUpdatePostForm()
       console.log(forumData._id);
       console.log(forumData);
 }

////////////////////////////Updates Forum Post//////////////////////////


////////////////////////////On Page Load//////////////////////////
//On page load get senator and forum data
useEffect(() => {
  axios
  .get('http://localhost:3000/project3')
  .then((res) => {
  setSenator(res.data.senator)
  setForum(res.data.thoughts)
  })
},[])
////////////////////////////On Page Load//////////////////////////




  return (
    <>
      <div className="showButtons">
        <button onClick={showForum}>Forum</button>
        <button onClick={showSenators}>Senators</button>
      </div>
      <div className="senators-container">
          {seeSenators ? <Senator senator={senator}/> : ""}
      </div>
      <div className="forum-container">
            {seeForum ? <Forum toggleNewPostForm={toggleNewPostForm} forum={forum} newPostSubmit={newPostSubmit} newUsernameChange={newUsernameChange} newAvatarChange={newAvatarChange} newCommentChange={newCommentChange} newEmojiChange={newEmojiChange} seeNewPostForm={seeNewPostForm} postDelete={postDelete} assignEditPost={assignEditPost} editPost={editPost} seeUpdatePostForm={seeUpdatePostForm} postUpdate={postUpdate} toggleUpdatePostForm={toggleUpdatePostForm}/> : ""}
      </div>
  </>
  )
}

export default App;
