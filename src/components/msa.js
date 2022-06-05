import Readmore from "./readmore.js"
import './css/msa.css'

const Msa = (props) => {

  return (
    <>
      <h1 className="shootings-title">Mass Shootings in America</h1>
        <div className="shootings-container">
            {props.msa.map((shooting) => {
              return (
                <>
                <div className="shooting-card">
                  <h5 className="card-case-label">Case:</h5>
                  <h5 className="card-case">{shooting.case}</h5>
                  <p className="card-date-label">Date: </p>
                  <p className="card-date">{shooting.date}</p>
                  <p className="card-summary-label">Summary:</p>
                  <p className="card-summary">{shooting.summary}</p>
                  <div className="button">
                  <button>Read more</button>
                  </div>
                </div>
              </>
              )
            })}
      </div>
    </>
  )
}

export default Msa
