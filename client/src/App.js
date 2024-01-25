import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import DataDisplay from './components/dataDisplay';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' component={HomePage}/>
        <ScrollToTop/>
        <Route exact path='/data' component={DataDisplay}/>
      </Routes>
    </div>
  );
}

export default App;
