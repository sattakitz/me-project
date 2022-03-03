import Profileinfo from "./components/Profileinfo";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="app-grid align-items-center">
        <div className="item-img">
          <img src="/me.jpg" className="App-logo" alt="logo" />
        </div>
        <Profileinfo />
      </div>
    </div>
  );
}

export default App;
