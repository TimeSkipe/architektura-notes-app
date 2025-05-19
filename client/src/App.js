import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';

function App() {

  // Main file of all app

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note/:id" element={<NotePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
