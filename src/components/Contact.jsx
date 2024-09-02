import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import css from './Contact.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.textContainer}>
        <span>{contact.name}</span>
        <span>{contact.phone}</span>
      </div>
      <button onClick={handleDelete} className={css.deleteButton}><RiDeleteBinLine /></button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default Contact;
