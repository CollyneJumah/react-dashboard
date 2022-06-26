import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightAside from './components/RightAside';

function App() {
  return (
    <div className="app">
      <div className="app-glass">
        <Sidebar />
        <MainContent />
        <RightAside />
      </div>
    </div>
  );
}

export default App;
