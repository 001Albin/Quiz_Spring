import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
        {/* Home Page with all components */}
          path="/" 
          element={
            <>
              <Header  />
              <Home />
              <Footer />
            </>
          } 
        /
    </Router>
  );
};

export default App;
