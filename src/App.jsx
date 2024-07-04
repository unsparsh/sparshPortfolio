import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import  Navbar  from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactForm/>
      <Contact/>
      <footer className={styles.foot} >Built with <strong className={styles.str}>React </strong>by <strong className={styles.stro}>Sparsh Singh Chundawat </strong>.</footer>
      
      
    </div>
  );
}

export default App;
