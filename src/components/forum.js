import {useState, useEffect} from 'react'
import axios from 'axios'


const Forum = (props) => {

  return(
  <>
  <h1>Forum</h1>
  <div className="button-container">
    <button onClick={props.toggleNewPostForm}>New Post</button>
  </div>
  {props.seeNewPostForm ? <form onSubmit={props.newPostSubmit}>
         Username: <input type="text" onChange={props.newUsernameChange}/><br/>
         Avatar: <input type="text" onChange={props.newAvatarChange}/><br/>
         Comment: <input type="text" onChange={props.newCommentChange}/><br/>
         Emoji: <input type="text" onChange={props.newEmojiChange}/><br/>
         <input className="button" type="submit" value="Create Post"/>
     </form> : ""}
  {props.forum.map((forum) => {
    return (
  		<div className="forum-card" key={forum._id}>
  		  <h3>{forum.username}</h3>
  		  <img src={forum.avatar}/>
  		  <p>{forum.comment}</p>
  		  <p>{forum.emoji}</p>

        {forum._id === props.editPost._id ?
               props.seeUpdatePostForm ?
               <div className="updatePost">
                  <form onSubmit={(event) => {props.postUpdate(event, forum)}}>
                    Username: <input type="text" onChange={props.newUsernameChange} placeholder={props.forum.username}/><br/>
                    Avatar: <input type="text" onChange={props.newAvatarChange} placeholder={props.forum.avatar}/><br/>
                    Comment: <input type="text" onChange={props.newCommentChange} placeholder={props.forum.comments}/><br/>
                    Emoji: <input type="text" onChange={props.newEmojiChange} placeholder={props.forum.emoji}/><br/>
                  <input className="button" type="submit" value="Save Updates"/>
                </form>
                <button onClick={props.toggleUpdatePostForm}>Cancel</button>
              </div>
               : null
             : null}
             {forum._id !== props.editPost._id ?
                  !props.seeUpdatePostForm ?
                <button onClick={(event) => {props.assignEditPost(forum)}}>Update</button>
                : null
              : null}
              <button onClick={(event) => {props.postDelete(forum)}}>Delete</button>

  		</div>
  	 )
    })}
    </>
  )
}


export default Forum
