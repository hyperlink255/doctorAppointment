import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Routers from '../routes/Routers'
import { ToastContainer} from 'react-toastify';

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <ToastContainer theme='dark'/>
    <Footer/>
    </>
  )
}

export default Layout