import Readmore from "./readmore.js"

const Msa = (props) => {

  return (
    <>
        <div className="col">
            <h1>hi</h1>
            {props.msa.map((shooting) => {
              return (
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{shooting.case}</h5>
                  <p className="card-text">{shooting.date}</p>
                  <p className="card-text">{shooting.summary}</p>
                  <button>Read more</button>
                </div>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default Msa
