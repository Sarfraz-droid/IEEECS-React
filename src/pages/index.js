import React,{useState,useEffect} from "react"
import { Link } from "gatsby"
import "../scss/Home.scss"
import "../scss/Home_Table.scss"

import Helmet from "../components/helmet"
import Navbar from "../components/Home/navbar"
import Loading from "../components/Loading"
import Hamburger from "../components/Home/Hamburger"

import Hero from "../components/Home/Hero"
import AboutUs from "../components/Home/AboutUs"
import OurTeam from "../components/Home/OurTeam"
import ContactUs from "../components/Home/ContactUs"
import Footer from "../components/Home/Footer"

import BgHero from "../components/Home/Background/BgHero"
import BgAboutUs from "../components/Home/Background/BgAbout"
import BgOurTeam from "../components/Home/Background/BgOurTeam"

import Mputer from "../images/Hero/MPUTER.svg"

import ScrollAnimation from "react-animate-on-scroll"

import { useMediaQuery } from 'react-responsive'


const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
      {isTabletOrMobile? <Hamburger/> : <Navbar />}
      <ScrollAnimation animateIn="fadeInDown">
      <Hero />

      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft">
      <img className="mputer" src={Mputer}/>
      </ScrollAnimation>
      <BgAboutUs />
      <AboutUs />
      {isTabletOrMobile? null:<BgOurTeam />}
      <OurTeam />
      <ContactUs />
      <Footer />
  </div>
  )
}

export default IndexPage
