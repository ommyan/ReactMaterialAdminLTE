import React from 'react'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

export default (props) => {
  return (
    <div className="main">
      <Header/>
      <Sidebar/>
      {props.children}
      <Footer/>
    </div>
  );
};