import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import css from './ContactsForm.module.css';
import { useState } from 'react';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addContact({ id: Date.now().toString(), name, phone }));
      setName('');
      setPhone('')
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={css.input}
        placeholder="Contact name..."
      />
      <input
        type="text"
        className={css.input}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number..."
      />
      <button type="submit" className={css.addButton}>Add Contact</button>
    </form>
  );
};

export default ContactsForm;
