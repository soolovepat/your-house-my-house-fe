import React from 'react';
import { StLayout } from './styled';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <StLayout>
        <Header/>
        {children}
        <Footer/>
    </StLayout>
  )
}

export default Layout