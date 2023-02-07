
import Button from "./Button";

const NavBar = ({paths}) => {
    return (
        <nav>
            <ul>
                {
                    paths.map((path,index) => (
                        <Button key={index} path={path} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar