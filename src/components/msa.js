import './css/msa.css'
import Modal from './modal.js'

const Msa = (props) => {

  return (
    <>
    <div className="data-description">
        <h4 className="data">This data was taken from an open-source database documenting mass shootings in the US. The dataset includes mass shootings between 1982-2012 of single incidents resulting in 4+ victims killed by the attacker. Data from 2013 onwards includes single incidents, in public places, resulting in 3+ victims killed by the attacker. Methods: Journalists conducted the research and curated the entries. The minimum number of sources cited for each incident was 3+ sources. This data includes the mental health background of the shooter. Excludes shootings stemming from more conventionally motivated crimes such as armed robbery or gang violence.</h4>
    </div>
        <div className="shootings-container">
            {props.msa.map((msa) => {
              return (
                <>
                <div className="shooting-card">
                  <h5 className="card-case">{msa.case}</h5>
                  <p className="card-date">{msa.date}</p>
                  <p className="card-summary">{msa.summary}</p>
                  {msa._id === props.viewMsaData._id ?
                  props.viewModal ?
                  <div className="modal">
                  <Modal msa={msa}/>
                  <button className="button" onClick={props.toggleModal}>Close</button>
                  </div>
                  : null
                  : null}
                  {msa._id !== props.viewMsaData._id ?
                  !props.viewModal ?
                  <button className="button" onClick={(event) => {
                    props.assignMsaDataSet(msa)}}>Read more</button>
                  : null
                  : null}
                </div>
              </>
              )
            })}
      </div>
    </>
  )
}

export default Msa
