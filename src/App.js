import './App.css';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard/>} />
      <Route exact path="/job-recommendation" element={<Dashboard/>} />
      <Route exact path="/resume-keywords" element={<Dashboard/>} />
      <Route exact path="/services" element={<Dashboard/>} />
      <Route exact path="/career-blogs" element={<Dashboard/>} />
    </Routes>
    </Router>
  );
}

export default App;
