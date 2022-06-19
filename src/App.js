import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import User from './pages/User';
import Header from './components/Header';
import Footer from './components/Footer';
import UserDetails from './pages/UserDetails';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<User/>}></Route>
          <Route path="/users/:userId" element={<UserDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
