import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import DataDisplay from './components/dataDisplay';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/navbar/navbar';
import Modal from './components/modal/modal';

function App() {

  return (
    <div className="App">
      <Modal/>
      <Navbar/>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route exact path='/data' element={<DataDisplay/>}/>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;