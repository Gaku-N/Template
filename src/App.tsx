import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Sub } from './components/pages/Sub';
import { PrimaryButton } from './components/atoms/PrimaryButton';
import { Image } from './components/atoms/Image';
function App() {
  const imageUrls = [
    'https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1543556153-5e59781a98dc?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601758176175-45914394491c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601758124096-1fd661873b95?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601758176559-76c75ead317a?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1668606763482-8dd2042c934e?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?q=80&w=3410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]
  return (
    <>
      <Link to={'/'}>ホーム</Link>
      <Link to={'/sub'}>サブ</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
      <PrimaryButton>bbb</PrimaryButton><br />
      {imageUrls.map((url) => (
        <Image size={{x:200,y:200}} objectFit={'cover'} src={url} alt={'dog'} />
      ))}
      
    </>
  );
}

export default App;
