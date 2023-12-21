
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';
import Home from './component/Home/Home';
import Navbar from './component/NavBar/Navbar';


function App() {

  return (
  
    <Router>
      <Navbar/>
     <Routes>
      <Route exact path="/" element={<Join/>}/>
      <Route exact path="/chat" element={<Chat/>}/>
      <Route exact path="/main" element={<Home/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
