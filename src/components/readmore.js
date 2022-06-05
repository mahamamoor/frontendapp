import Modal from 'react-modal';
import {openModal, closeModal} from "./management.js"
// Modal to read more
const Readmore = ({openModal, closeModal, setIsOpen}) => {

  return (
  <Modal isOpen={openModal}>
  <h1>Hello</h1>
  <button onClick={closeModal}>Close</button>
  </Modal>
  )
}
export default Readmore
