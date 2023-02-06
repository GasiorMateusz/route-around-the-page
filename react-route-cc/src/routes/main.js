import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "../components/Contacts";
import {ABOUT, HOME, CONTACTS} from "./matcher"

const Main = () => {
  return(
      <Routes>
          <Route path={HOME} element={<Home/>}/>
          <Route path={ABOUT} element={<About/>}/>
          <Route path={CONTACTS} element={<Contacts/>}/>
      </Routes>
  )
}
export default Main