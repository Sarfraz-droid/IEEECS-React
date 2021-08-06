import React,{useState,useEffect} from "react"
import { Link } from "gatsby"
import "../scss/Home.scss"

import Helmet from "../components/helmet"
import Navbar from "../components/Home/navbar"
import Loading from "../components/Loading"

import Hero from "../components/Home/Hero"
import AboutUs from "../components/Home/AboutUs"
import OurTeam from "../components/Home/OurTeam"

import BgHero from "../components/Home/Background/BgHero"
import BgAboutUs from "../components/Home/Background/BgAbout"
import BgOurTeam from "../components/Home/Background/BgOurTeam"

import Mputer from "../images/Hero/MPUTER.svg"



const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  
  return (
  <div>
   
    {loading? <Loading />:null}
      <Helmet />
      <BgHero />
      <Navbar />
      <Hero />

      <img className="mputer" src={Mputer}/>
      <BgAboutUs />
      <AboutUs />
      <BgOurTeam />
      <OurTeam />
  </div>
  )
}

export default IndexPage
