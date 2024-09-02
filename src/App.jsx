import ContactList from './components/ContactList.jsx';
import SearchBox from './components/SearchBox.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import css from './App.module.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {

  return (
    <Provider store={store}>
      <div className={css.container}>
        <h1 className={css.title}>Address Book</h1>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
