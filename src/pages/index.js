import React,{useState,useEffect} from "react"
import { Link } from "gatsby"
import "../scss/Home.scss"

import Helmet from "../components/helmet"
import Navbar from "../components/Home/navbar"
import Loading from "../components/Loading"

import Hero from "../components/Home/Hero"
import AboutUs from "../components/Home/AboutUs"
import OurTeam from "../components/Home/OurTeam"
import ContactUs from "../components/Home/ContactUs"

import BgHero from "../components/Home/Background/BgHero"
import BgAboutUs from "../components/Home/Background/BgAbout"
import BgOurTeam from "../components/Home/Background/BgOurTeam"

import Mputer from "../images/Hero/MPUTER.svg"

import ScrollAnimation from "react-animate-on-scroll"

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
      <ScrollAnimation animateIn="fadeInDown">
      <Hero />

      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft">
      <img className="mputer" src={Mputer}/>
      </ScrollAnimation>
      <BgAboutUs />
      <AboutUs />
      <BgOurTeam />
      <OurTeam />
      <ContactUs />
  </div>
  )
}

export default IndexPage
