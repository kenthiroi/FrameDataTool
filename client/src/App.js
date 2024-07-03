import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import DataDisplay from './components/dataDisplay';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/navbar/navbar';

function App() {

  console.log(HomePage);
  
  return (
    <div className="App">
      <Navbar/>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route exact path='/data' component={DataDisplay}/>
        <Route exact path='/' component={HomePage}/>
      </Routes>
    </div>
  );
}

export default App;