import React from "react"

import { motion } from "framer-motion"

import AboutUsIcon from "../../images/AboutUs/AboutUsGraphic.svg"
import AboutLine from "../../images/AboutUs/AboutUsLine.svg"

import IEEECS from "../../images/AboutUs/IEEE-CS_LogoTM-orange 1.png"
import IEEEJMI from "../../images/AboutUs/ieeeblack (2) (1) 1.png"

import AboutBall from "../../images/AboutUs/AboutBall.svg"

import ScrollAnimation from "react-animate-on-scroll"


function AboutUs() {
  return (
    <div className="AboutUs">
      <ScrollAnimation animateIn="fadeIn">
      <h1>
        About Us
        <img className="Icon" src={AboutUsIcon} />
        <img className="aboutUsline" src={AboutLine} />
      </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInDown">
      <p>
        The IEEE CS is the leading source of information, inspiration, and
        collaboration in computer science and engineering. IEEE CS is a
        technology - driven society established to empower people to bring about
        changes in the community. We are an expanding group of professionals
        that lead in computing and connecting members worldwide.
      </p>
      </ScrollAnimation>

      <div className="logos">
        <ScrollAnimation animateIn="fadeInLeft">
        <img className="ieeecs" src={IEEECS}/>
        <img className="ieeejmi" src={IEEEJMI}/>
        </ScrollAnimation>
      </div>

      <div className="ball_section">
        <motion.div
          className="ball ball_one"
        >
        <img src={AboutBall} />
        </motion.div>

        <motion.div
          className="ball ball_two"
        >
        <img src={AboutBall} />
        </motion.div>

      </div>
    </div>
  )
}

export default AboutUs
