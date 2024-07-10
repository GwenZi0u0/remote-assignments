import './App.css';
// import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import WelcomeMessage from './components/WelcomeMessage';
import Section from './components/Section';

function App() {
//   const [count, setCount] = useState(0);
  
//     const increment = ( ) => {
//       setCount(count + 1);
// }
  return (
    <>
     <nav className="navigator">
      <Header>
      
      </Header>
      <Menu />
     </nav>
     <div className='container'>
          <WelcomeMessage />
          <Section />
        </div>
      {/* <div className='App'>
        <Header />
        <Menu />
        <div className='container'>
          <WelcomeMessage />
          <Section />
        </div>
      </div> */}
    </>
  );
}

export default App;
