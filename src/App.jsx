import SectionsEN from './SectionsEN';
import SectionsAR from './SectionsAR';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<SectionsEN />} />
          <Route path="/ar" element={<SectionsAR />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;