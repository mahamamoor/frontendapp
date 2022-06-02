import {useState, useEffect} from 'react'
import axios from 'axios'


const Forum = (props) => {

//States for each value in the forum data
const [newUsername, setNewUsername] = useState()
const [newAvatar, setNewAvatar] = useState()
const [newComment, setNewComment] = useState()
const [newEmoji, setNewEmoji] = useState()


//State that controls visibiility of a new post form
const [seeNewPostForm, setSeeNewPostForm] = useState(false)

const [seeForum, setSeeForum] = useState(false)

const handleNewPostFormSubmit = (event) => {
  event.preventDefault()
  axios.post(
      'https://rocky-savannah-90233.herokuapp.com/project3',
      {
        username: newUsername,
        avatar: newAvatar,
        comment: newComment,
        emoji: newEmoji
      }
    ).then(() => {
      axios
        .get('https://rocky-savannah-90233.herokuapp.com/project3')
        .then((response) => {
            setSeeForum(response.data.thoughts)
        })
    })
}

//Controls the visibility of creating a new post
	const toggleNewPostForm = () => {
	  if (seeNewPostForm === false) {
	    setSeeNewPostForm(true)
	  } else {
	    setSeeNewPostForm(false)
	  }
	}

	return (
		<div className="forum-card">
		<h1>Forum</h1>
		<h3>{props.forum.username}</h3>
		<img src={props.forum.avatar}/>
		<p>{props.forum.comment}</p>
		<p>{props.forum.emoji}</p>
		<br/>
		</div>
	)
}


export default Forum
