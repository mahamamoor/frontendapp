import Readmore from "./readmore.js"
import './css/msa.css'

const Msa = (props) => {

  return (
    <>
    <div className="data-description">
        <h4 className="data">Data Fields: City/state, date, brief description, fatalities, injured, venue, mental health history, weapons obtained legally, where obtained, type of weapon/details, race, gender, lat/long.Data Fields: City/state, date, brief description, fatalities, injured, venue, mental health history, weapons obtained legally, where obtained, type of weapon/details, race, gender, lat/long.Data Fields: City/state, date, brief description, fatalities, injured, venue, mental health history, weapons obtained legally, where obtained, type of weapon/details, race, gender, lat/long.</h4>
    </div>
        <div className="shootings-container">
            {props.msa.map((shooting) => {
              return (
                <>
                <div className="shooting-card">
                  <h5 className="card-case">{shooting.case}</h5>
                  <p className="card-date">{shooting.date}</p>
                  <p className="card-summary">{shooting.summary}</p>
                  <button className="button">Read more</button>
                </div>
              </>
              )
            })}
      </div>
    </>
  )
}

export default Msa
