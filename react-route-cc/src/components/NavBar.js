import {Link} from "react-router-dom";
import {HOME, ABOUT, CONTACTS} from "../routes/matcher";
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={HOME}>Home</Link></li>
                <li><Link to={ABOUT}>About</Link></li>
                <li><Link to={CONTACTS}>Contacts</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar