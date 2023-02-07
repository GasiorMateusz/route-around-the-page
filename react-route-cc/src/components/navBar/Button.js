import {Link} from "react-router-dom";

const Button = ({path}) => {
    return (
        <li><Link to={path.address}>{path.text}</Link></li>
    )
}

export default Button