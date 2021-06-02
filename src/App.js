import Profileinfo from './components/Profileinfo';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="app-grid">
        <div className="item-img">
          <img src="/me.jpg" className="App-logo" alt="logo" />
        </div>
        <Profileinfo />
      </div>
    </div>
  );
}

export default App;
