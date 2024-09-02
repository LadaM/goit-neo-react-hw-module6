import SearchBox from './components/SearchBox.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import css from './App.module.css';
import ContactList from './components/ContactList.jsx';

function App() {

  return (
    <div className={css.container}>
      <h1 className={css.title}>Address Book</h1>
      <div className={css.formContainer}>
        <ContactsForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  )
}

export default App
