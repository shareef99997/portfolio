import Sections from './Sections';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Sections />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;