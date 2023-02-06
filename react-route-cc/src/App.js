import {Link, Route, Routes} from "react-router-dom"
import Home from "./routes/Home"
import BookList from "./routes/BookList"
import Layout from "./components/Layout";

export function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                </ul>
            </nav>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/books" element={<BookList/>}/>
                </Routes>
            </Layout>

        </>
    )
}