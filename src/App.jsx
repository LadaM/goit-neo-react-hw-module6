import SearchBox from './components/SearchBox.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import css from './App.module.css';
import ContactList from './components/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactOps.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading } from './redux/selectors.js';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // loading the contacts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Address Book</h1>
      {isLoading && <p>Loading contacts...</p>}
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
