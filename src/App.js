import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <>
        <Navbar />
        <div className='container' style={{margin:"50px auto"}}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
