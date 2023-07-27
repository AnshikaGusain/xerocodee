import React from "react";
import Head from 'next/head';

import Navbar from "./components/Navbar";
import First from "./components/First";
import Benefits from "./components/Benefits";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const Page=()=>{
  return(
    <>
    <Head>
        <title>XeroCodee</title>
        
      </Head>
      <Navbar/>
      <First/>
      <Benefits/>
      <Cards/>
      <Footer/>
      
    
    </>
  );
}

export default Page;