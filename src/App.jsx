import { Outlet } from 'react-router-dom';
import NavTabs from './Components/NavTabs.jsx';
import FooterEl from './Components/FooterEl.jsx';
import './App.css';

function App() {
  // The Outlet component will swap between the different pages according to the URL
  return (
    <div className="app-container">
      <NavTabs />
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <FooterEl />
      </footer>
    </div>
  );
}

export default App;


