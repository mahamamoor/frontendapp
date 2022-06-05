import Readmore from "./readmore.js"
import './css/msa.css'

const Msa = (props) => {

  return (
    <>
    <div className="data-description">
        <h4 className="data">This data was taken from an open-source database documenting mass shootings in the US. The dataset includes mass shootings between 1982-2012 of single incidents resulting in 4+ victims killed by the attacker. Data from 2013 onwards includes single incidents, in public places, resulting in 3+ victims killed by the attacker. Methods: Journalists conducted the research and curated the entries. The minimum number of sources cited for each incident was 3+ sources. This data includes the mental health background of the shooter. Excludes shootings stemming from more conventionally motivated crimes such as armed robbery or gang violence.</h4>
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
