import "./App.css";
import Portfolio from "./components/portfolio/Portfolio";
import { projectData } from './projectData'


function App() {
  return (
    <div className="container">
      <Portfolio projectData={projectData}/>
    </div>
  );
}

export default App;
