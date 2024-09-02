import SearchBox from './components/SearchBox.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import css from './App.module.css';

function App() {

  return (
      <div className={css.container}>
        <h1 className={css.title}>Address Book</h1>
        <ContactsForm />
        <SearchBox />
      </div>
  )
}

export default App
