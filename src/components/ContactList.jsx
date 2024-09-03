import { useSelector } from 'react-redux';
import Contact from './Contact';
import css from './ContactList.module.css';
import { selectContactItems } from '../redux/contactsSlice.js';
import { selectNameFilter } from '../redux/filtersSlice.js';

const ContactList = () => {
  const contacts = useSelector(selectContactItems);
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
