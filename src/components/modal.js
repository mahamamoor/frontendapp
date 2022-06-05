import './css/msa.css'

const Modal = (props) => {
      return (
        <div className="modal-modal">
          <strong>Case: </strong><p>{props.msa.case}</p>
          <strong>Location: </strong><p>{props.msa.location}</p>
          <strong>Age of shooter: </strong><p>{props.msa.age_of_shooter}</p>
          <strong>Prior signs of mental health issues: </strong><p>{props.msa.prior_signs_mental_health_issues}</p>
          <strong>Race: </strong><p>{props.msa.race}</p>
          <strong>Gender: </strong><p>{props.msa.gender}</p>
        </div>
      )
}

export default Modal
