import ContactList from "./components/ContactList";
import SearchForm from "./components/SearchBox";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
    </div>
  );
}

export default App;
