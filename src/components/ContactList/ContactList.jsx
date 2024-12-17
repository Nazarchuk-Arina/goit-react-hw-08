import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectIsLoading);

  if (
    (!filteredContacts && !isLoading) ||
    (filteredContacts.length === 0 && !isLoading)
  ) {
    return <p>Contacts don't available</p>;
  }

  return (
    <div>
      <ul className={s.contact__list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
