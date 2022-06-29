import './App.css';
import Sidebar from './components/Side Bar/Sidebar';
import Topbar from './components/Top Bar/Topbar';
import Home from './pages/home/Home';
 
function App() {
  return (
    <div>
     <Topbar/>
     <div className='container'>
     <Sidebar /> 
     <Home />
    </div>
    </div>
  );
}

export default App;
