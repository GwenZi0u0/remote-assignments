import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import WelcomeMessage from './components/WelcomeMessage';
import Section from './components/Section';

function App() {
  return (
    <>
     <nav className="navigator">
      <Header />
      <Menu />
     </nav>
     <div className='container'>
        <WelcomeMessage />
        <Section />
      </div>
    </>
  );
}

export default App;
