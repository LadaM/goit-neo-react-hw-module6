import { useSelector } from 'react-redux';
import Contact from './Contact';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../redux/selectors.js';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
