import {useState, useEffect} from 'react'

const Senator = (props) => {


	return (
		<>
		<h1>Senators</h1>
		{props.senator.map((senator) => {
			return (
				<div className="senator-card" key={senator._id}>
					<h2>{senator.name}</h2>
					<img src={senator.image}/>
					<p>State: {senator.state}</p>
					<p>Party: {senator.party}</p>
					<p>View on gun control: {senator.leaning}</p>
					<p>Amount received from NRA: {senator.funding}</p>
					<a href={senator.email} target="_blank">Email {senator.name}</a>
					<p>Phone: {senator.phone}</p>
					<br/>
				</div>
			)
		})}
	</>
	)
}


export default Senator
