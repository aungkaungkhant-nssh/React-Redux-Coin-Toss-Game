import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div>
        <Navbar />
        <div className='container mt-4'>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
