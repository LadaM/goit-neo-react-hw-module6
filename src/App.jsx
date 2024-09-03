import SearchBox from './components/SearchBox.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import css from './App.module.css';
import ContactList from './components/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations.js';
import { selectContacts } from './redux/contactsSlice.js';

function App() {
  // getting state from store
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Address Book</h1>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {/*<p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>*/}
      <div className={css.formContainer}>
        <ContactsForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  )
}

export default App
