import './App.css';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import ProjectsDisplay from './components/ProjectsDisplay';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ProjectsDisplay />
     <Footer />
    </div>
  );
}

export default App;
