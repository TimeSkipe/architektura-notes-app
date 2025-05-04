import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/note/:id" element={<NoteView />} /> */}
        {/* <Route path="/edit/:id" element={<EditNote />} /> */}
        {/* Можна додати й інші сторінки */}
      </Routes>
    </Router>
  );
}

export default App;
