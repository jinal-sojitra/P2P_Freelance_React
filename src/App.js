import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import CreateProject from './components/CreateProject';
import Navbar from './components/Navbar';
import WalletConnect from './components/WalletConnect';
import ProjectItem from './components/ProjectItem';
import Projects from './components/Projects';
import DetailProject from './components/DetailProject'
import ProjectState from './context/projectState';

function App() {
  return (
    <div className="App">
      <ProjectState>
      <Router>
      {/* <WalletConnect></WalletConnect> */}

      <Navbar/>
      <Routes>
      <Route exact path="/projects" element={<Projects/>}/>
      <Route exact path="/detail/:id" element={<DetailProject/>}/>

        {/* <Route exact path="/" element={Home}/> */}
        <Route exact path="/postProject" element={<CreateProject/>}/>
      </Routes>
     {/* <CreateProject></CreateProject> */}
     {/* <ProjectItem/> */}
     </Router>
     </ProjectState>
    </div>
  );
}

export default App;
