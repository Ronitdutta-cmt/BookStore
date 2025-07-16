
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import Footer from './components/Footer'; 
import { ConfigProvider } from './config/ConfigProvider';
 

function App() {
  return (
    <ConfigProvider>
    <Router>
      <Navbar /> 
        <Routes>
          <Route exact path="/"     element={<Home/>} />
          <Route  path="books"     element={<Books/>} />
          <Route  path="addBooks"     element={<AddBooks/>} />
        </Routes>
      <Footer />
    </Router>
    </ConfigProvider>
  );
}

export default App;
