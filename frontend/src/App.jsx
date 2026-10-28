import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Gallery from './pages/Gallery';
import CharacterBuilder from './pages/CharacterBuilder/CharacterBuilder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-dvh-screen bg-[#F8F9FA] text-gray-900 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-16 md:pb-0">
        <Header />
        <main className="flex-1 flex flex-col min-w-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character-builder" element={<CharacterBuilder />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          limit={2}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover={false}
          toastClassName="!rounded-xl !shadow-lg !text-sm !font-sans"
        />
      </div>
    </Router>
  );
}

export default App;
