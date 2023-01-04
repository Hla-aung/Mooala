import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Flavours from './components/Flavours';
import Organic from './components/Organic';
import Cook from './components/Cook';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <LandingPage />
        <Flavours />
        <Organic />
        <Cook />
        <Footer />
    </div>
  );
}

export default App;
