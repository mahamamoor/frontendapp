import {useState, useEffect} from 'react'

const Forum = (props) => {


	return (
		<div className="forumpost">
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
