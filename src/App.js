import './App.css';
import CreateProject from './components/CreateProject';
import Navbar from './components/Navbar';
import WalletConnect from './components/WalletConnect';
import ProjectItem from './components/ProjectItem';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <WalletConnect></WalletConnect> */}
     <CreateProject></CreateProject>
     <ProjectItem/>
    </div>
  );
}

export default App;
