import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Collection from '../components/Collection'
import WomensCollection from '../components/WomensCollection'
import {Gents,Ladies} from '../data'
import WomenBanner from '../components/WomenBanner'
const MainPage=()=> {
  const [gentsFashion,setGentsFashion]=useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  console.log(Gents)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsFashion={gentsFashion}/>
        <WomenBanner/>
        <WomensCollection ladiesfashion={ladiesFashion}/>
        
        

        <Footer/>
        
    </div>
  )
}

export default MainPage