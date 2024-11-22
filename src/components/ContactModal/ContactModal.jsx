import Modal from "react-modal";
import css from "./ContactModal.module.css";

Modal.setAppElement("#root");

const ContactModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <div>
      <Modal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Contact Modal"
        bodyOpenClassName="no-scroll"
      >
        <p className={css.desc}>{message || "Are you sure?"}</p>
        <div className={css.wrapperBtn}>
          <button className={css.btn} onClick={onConfirm}>
            Delete
          </button>
          <button className={css.btn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
