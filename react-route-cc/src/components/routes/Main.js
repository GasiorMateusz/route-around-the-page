import {Route, Routes} from "react-router-dom";
import {PATHS} from "./paths";

const Main = () => {
    return (
        <Routes>
            {
                PATHS.map((path, index) => (
                    <Route key={index} path={path.address} element={path.element}/>
                ))
            }

        </Routes>)
}
export default Main