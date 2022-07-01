
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route index element={<Home />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
