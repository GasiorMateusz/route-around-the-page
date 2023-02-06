import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";

const Main = () => {
  return(
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<BookList/>}/>
      </Routes>
  )
}
export default Main