import React from 'react'
import './css/msa.css'

const Paginationmsa = ({msaPerPage, totalMsaPosts, msaPaginate}) => {

	const pagenumba = []

	for (let i = 1; i <= Math.ceil(totalMsaPosts / msaPerPage); i++) {
		pagenumba.push(i)
	}
	return (
		<div className="msa-page-div">
			<ul className="msa-pagination">
			{pagenumba.map(number => (
				<li key={number} className="msa-page-item">
				<a onClick={() => msaPaginate(number)} href="!#" className="msa-page-link">
				{number}
				</a>
				</li>
			))}
			</ul>
		</div>
	)
}

export default Paginationmsa
