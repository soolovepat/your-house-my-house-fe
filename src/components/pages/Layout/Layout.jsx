import React from 'react';
import { StLayout } from './styled';
import { Outlet } from 'react-router-dom';
// import Footer from './footer/Footer';
// import Header from './header/Header';
import Footer from "./footer/Footer"
import Header from "./header/Header"

const Layout = ({children}) => {
  return (
    <StLayout>
        <Header/>
        <main>
            {children || <Outlet/>}
        </main>
        <Footer/>
    </StLayout>
  )
}

export default Layout