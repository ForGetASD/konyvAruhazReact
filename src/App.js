import './App.css';
import Public from './pages/Public';
import Admin from './pages/Admin';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Public />} />
              <Route path="admin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      <footer>
        <p>Vitay Zalán</p>
      </footer>
    </div>
  );
}

export default App;
