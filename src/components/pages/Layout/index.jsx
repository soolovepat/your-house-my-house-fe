import React from 'react';
import { StLayout } from './styled';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

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