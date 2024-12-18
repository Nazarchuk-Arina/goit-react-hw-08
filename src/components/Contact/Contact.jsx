import s from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => {
        console.log("Contact deleted successfully");
      })
      .catch((error) => {
        console.error("Failed to delete contact:", error);
      });
  };
  return (
    <div className={s.contact}>
      <div className={s.contact__both}>
        <div className={s.contact__name}>
          <IoPersonSharp />
          <p>{contact.name}</p>
        </div>
        <div className={s.contact__number}>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={s.contact__btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
