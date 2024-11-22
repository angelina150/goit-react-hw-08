import DocumentTitle from "../../components/DocumentTitle.jsx";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <DocumentTitle> Home</DocumentTitle>
      <div>
        <h1 className={css.title}>
          Welcome to Phonebook, your personal digital contact organizer.
        </h1>
      </div>
    </>
  );
};

export default HomePage;
