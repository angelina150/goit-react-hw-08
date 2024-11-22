import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import DocumentTitle from "../../components/DocumentTitle.jsx";
const ContactsPage = () => {
  return (
    <div>
      <DocumentTitle> Your phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
