import './App.css';

import LeftBar from './components/leftBar';
import RightBar from './components/rightBar';
import AltBar from './components/altBar';

function App() {
  return (
    <div className="App">
      <LeftBar />
      <RightBar />
      <AltBar />
    </div>
  );
}

export default App;
