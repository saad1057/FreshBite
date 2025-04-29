import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        {/* Add more routes like this */}
        {/* <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } /> */}
      </Routes>
    </BrowserRouter>
  );
}