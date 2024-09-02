import { useSelector } from 'react-redux';
import Contact from './Contact';
import css from './ContactList.module.css';
import { selectNameFilter } from '../redux/selectors.js';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
