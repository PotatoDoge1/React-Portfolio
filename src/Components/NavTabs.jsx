import { Link, useLocation} from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}  // This is a conditional (ternary) operator that checks to see if the current page is "Home". If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/AboutPage"
                    className={currentPage === '/AboutPage' ? 'nav-link active' : 'nav-link'}
                >
                    AboutPage
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;