import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
// import Logout from "../components/logout.js";
import Homecards from "../components/homeCards.js";
import CarouselHome from "../components/carousel.js";
import Navbar from "../components/navBar.js";
import React, { Component } from 'react';
// import Descriptif from '../components/descriptif.js';     
import Footer from '../components/footer';


export default function Home() {

  return (
    <div>
      <div className="">
        {/* <Logout /> */}
        <Head>
        </Head>
        <div className=''>
        <Navbar /></div>
        {/* <Descriptif/> */}
        <div className='flex'>
   

          <CarouselHome />
       
        </div>
        <Homecards />

      </div>

      <Footer />

    </div>
  )
}
