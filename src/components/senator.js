import {useState, useEffect} from 'react'

const Senator = (props) => {


	return (
		<div className="senator">
		<h1>Senators</h1>
		<h2>{props.senator.name}</h2>
		<img src={props.senator.image}/>
		<p>State: {props.senator.state}</p>
		<p>Party: {props.senator.party}</p>
		<p>View on gun control: {props.senator.leaning}</p>
		<p>Amount received from NRA: {props.senator.funding}</p>
		<a href={props.senator.email} target="_blank">Email {props.senator.name}</a>
		<p>Phone: {props.senator.phone}</p>
		<br/>
		</div>
	)
}


export default Senator
