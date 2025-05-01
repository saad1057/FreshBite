import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Meals from './pages/Meals/Meals';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function Layout({ children, hideFooter }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function AuthLayout({ children }) {
  return (
    <div className="app">
      <main>{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes with full layout */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        
        {/* Auth routes without header/footer */}
        <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        } />
        <Route path="/signup" element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        } />

        {/* Add more routes here */}
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/meals" element={
          <Layout>
            <Meals />
          </Layout>
        } />
        <Route path="/how-it-works" element={
          <Layout>
            <HowItWorks />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <Contact />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}