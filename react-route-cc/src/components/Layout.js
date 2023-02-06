import React from 'react';
import Header from './Header'
import Footer from './Footer'
import NavBar from "./NavBar";
import '../layout.css'
const Layout =({children}) =>{
    return(
        <>
            <div>
                <Header/>
                <NavBar/>
            </div>
            <div>
                <main>{children}</main>
            </div>
            {<div><Footer/></div>}
        </>
    )
}

export default Layout;