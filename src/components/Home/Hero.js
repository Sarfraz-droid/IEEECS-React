import React,{useState,useRef} from "react"

import { motion } from "framer-motion"

import {Zoom,Fade} from 'react-reveal';

import HeroLogo from "../../images/Hero/TheComputerSociety.svg"
import RightArrow from "../../images/Hero/RightArrow.svg"
import HeroGraphic from "../../images/Hero/HeroGraphic.svg"
import Ground from "../../images/Hero/HeroGround.svg"

function Hero() {

    const graphicdiv = useRef(null);
   const [graphic, setgraphic] = useState(0);

    const graphicpos = (x) => {
        const rect = graphicdiv.current.getBoundingClientRect();
        console.log(rect)
        setgraphic((x - rect.left - rect.width / 2)/20)
    }

  return (
    <div className="hero-container">
      <div className="hero-info">
        <Zoom>
        <img className="hero-logo" src={HeroLogo} />
        <a>
            Know More  
            <img src={RightArrow}/>

        </a>
        </Zoom>
      </div>
      
      <div className="hero-art">
        <motion.div ref={graphicdiv} className="graphic" 
        onMouseLeave={() => setgraphic(0)}
        onMouseMove={(e) => {
            graphicpos(e.clientX)
        }} 
        animate= {
            {
                rotateX: 0,
    
                rotateZ: graphic,
                originY: 0.5,
                originX: 0.57
            }
        }
        transition={{ type: "spring", stiffness: 200,  }}
        >
        <img src={HeroGraphic} />
        </motion.div>
        <img className="ground" src={Ground}/>
      </div>
    </div>
  )
}

export default Hero
