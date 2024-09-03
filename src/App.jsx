import SearchBox from './components/SearchBox.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import css from './App.module.css';
import ContactList from './components/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations.js';
import { selectContacts } from './redux/contactsSlice.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  // loading the contacts
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
      <ToastContainer position="bottom-right"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      />
    </div>
  )
}

export default App
