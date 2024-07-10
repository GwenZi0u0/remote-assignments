import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {

  return (
    <>
     <nav className="navigator">
      <Header />
     </nav>
     <div className='container'>
       <Counter />
     </div>
    </>
  );
}

export default App;
