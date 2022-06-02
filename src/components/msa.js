const Msa = (props) => {

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
            <h1>hi</h1>
            {props.msa.map((shooting) => {
              return (
                <>
                <img src={shooting.sources} class="card-img-top" alt="Read More"/>
                <h5 className="card-title">{shooting.case}</h5>
                <p className="card-text">{shooting.date}</p>
                <p className="card-text">{shooting.location__1}</p>
                <p className="card-text">{shooting.summary}</p>
                </>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Msa
