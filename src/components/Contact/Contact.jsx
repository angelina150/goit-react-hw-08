import { useState } from "react";
import css from "./Contact.module.css";
import ContactModal from "../ContactModal/ContactModal";
import toast from "react-hot-toast";
const Contact = ({ id, name, number, onDeleteContact }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleDeleteContact = () => {
    setModalOpen(false);
    onDeleteContact(id);
    toast.success("Contact deleted successfully!");
  };
  return (
    <div>
      <li className={css.item} key={id}>
        <div className={css.infoWrapper}>
          <p className={css.info}> 👤 {name}</p>
          <p className={css.info}> 📞 {number}</p>
        </div>

        <button
          className={css.btn}
          type="button"
          onClick={() => setModalOpen(true)}
        >
          Delete
        </button>
      </li>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeleteContact}
        message="Are you sure you want to delete this contact?"
      />
    </div>
  );
};

export default Contact;
