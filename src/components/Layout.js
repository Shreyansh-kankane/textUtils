import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout(props) {
  return (
    <div>
    <>
      <Navbar title="TextUtils" about="about Us" mode= {props.mode} toggleMode={props.toggleMode} alert={props.alert} />
      <Outlet/>
      <Footer mode={props.mode}/>
    </>
    </div>
  )
}

export default Layout