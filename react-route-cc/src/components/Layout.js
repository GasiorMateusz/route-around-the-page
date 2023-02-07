import React from 'react';
import Header from './Header'
import Footer from './Footer'
import NavBar from "./navBar/NavBar";
import {PATHS} from "./routes/paths";
import '../layout.css'
const Layout =({children}) =>{
    return(
        <div>
            <div>
                <Header/>
                <NavBar paths={PATHS}/>
            </div>
            <div>
                <main>{children}</main>
            </div>
            {<div><Footer/></div>}
        </div>
    )
}

export default Layout;