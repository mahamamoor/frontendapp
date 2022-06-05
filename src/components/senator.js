import {useState, useEffect} from 'react'


const Senator = (props) => {

const [search, setSearch] = useState("")

const [noSearch, setNoSearch] = useState("No Republican Senator from that state")

	return (
		<>
		<h1 className="Title">Senators</h1>
		<div className="searchbar">
			<p className="stateSearch">Search for your state</p>
			<input className="input-search" type="text" placeholder="Search..." onChange={event => {setSearch(event.target.value)}}/>
		</div>
		<div className="senators-container">
		{props.senator.filter((senator) => {
			if (search == "") {
				return senator
			} else if (senator.state.toLowerCase().includes(search.toLowerCase())) {
				return senator
			} 
		}).map((senator) => {
			return (
				<div className="senator-card" key={senator._id}>
					<h2 className="senator-name">{senator.name}</h2>
					<img className="senator-img" src={senator.image}/>

					<div className="senator-info-div">
						<p className="senator-info-label">State:</p>
						<p className="senator-info">{senator.state}</p>
					</div>

					<div className="senator-info-div">
						<p className="senator-info-label">Party:</p>
						<p className="senator-info">{senator.party}</p>
					</div>

					<div className="senator-info-div">
						<p className="senator-info-label">View on gun control:</p>
						<p className="senator-info">{senator.leaning}</p>
					</div>

					<div className="senator-info-div">
						<p className="senator-info-label">Amount received from NRA:</p>
						<p className="senator-info">{senator.funding}</p>
					</div>

					<div className="senator-info-div">

						<p className="senator-info-label">Email</p>
						<a className="senator-email" href={senator.email} target="_blank">{senator.name}</a>
					</div>

					<div className="senator-info-div">
						<p className="senator-info-label">Phone:</p>
						<p className="senator-info">{senator.phone}</p>
				</div>
				</div>
			)
		})}
		</div>

	</>
	)
}


export default Senator
