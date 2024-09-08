import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Sub } from './components/pages/Sub';
function App() {
  return (
    <>
      <Link to={'/'}>ホーム</Link>
      <Link to={'/sub'}>サブ</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </>
  );
}

export default App;
