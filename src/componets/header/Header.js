import {Link} from 'react-router-dom';

export const Header = () => (
    <header>
        <nav>
            <Link to="/login">Login </Link>
            <Link to="/">Dashboard </Link>
            <Link to="/add-kpi">Add kpi </Link>
            <Link to="/add-pime">Add pime </Link>
        </nav>
    </header>
);