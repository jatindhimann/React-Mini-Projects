import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h3>Congratulations!</h3>
        <p>You earned 10 Coins.</p>
        <div className="coin">
          <div className="coin-inner">
            <div className="coin-front">Coin</div>
            <div className="coin-edge"></div>
            <div className="coin-back">Coin</div>
          </div>
        </div>
        <p>Consistency is the key to success !</p>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
