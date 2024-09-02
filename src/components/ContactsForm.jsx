import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import css from './ContactsForm.module.css';
import { useState } from 'react';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addContact({ id: Date.now().toString(), name }));
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={css.input}
        placeholder="Enter contact name"
      />
      <button type="submit" className={css.addButton}>Add Contact</button>
    </form>
  );
};

export default ContactsForm;
