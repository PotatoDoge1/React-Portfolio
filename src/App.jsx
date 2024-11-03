import { Outlet } from 'react-router-dom';
import NavTabs from './Components/NavTabs.jsx';
import FooterEl from './Components/FooterEl.jsx'

function App() {
  // The Outlet component will swap between the different pages according to the URL
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <FooterEl />
      </footer>
    </>
  );
}

export default App;


