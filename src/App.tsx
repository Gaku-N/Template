import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Sub } from './components/pages/Sub';
import { PrimaryButton } from './components/atoms/PrimaryButton';
import { ImageFlame } from './components/atoms/ImageFlame';
function App() {
  return (
    <>
      <Link to={'/'}>ホーム</Link>
      <Link to={'/sub'}>サブ</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
      <PrimaryButton>bbb</PrimaryButton>
      <ImageFlame size={{x:100,y:130}} src={'https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={'dog'} objectFit={'contain'} />
    </>
  );
}

export default App;
