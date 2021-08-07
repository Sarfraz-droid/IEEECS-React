import React from 'react'

import Svg from "../../Svg"

import FullCircle from "../../../images/Background/Circle.svg"
import HollowCircle from "../../../images/Background/Hollow_Circle.svg"
import ZigZag from "../../../images/Background/ZigZag.svg"
import Triangle from "../../../images/Background/Triangle.svg"
import CutCircle from "../../../images/Background/CutCircle.svg"
import FillArc from "../../../images/Background/Fill_arc.svg"

import OurTeamGraphic from "../../../images/Our Team/OurTeamGraphic.svg"
import OT_2 from "../../../images/Our Team/OT_2.svg"

import ScrollAnimation from 'react-animate-on-scroll';


function BgOurTeam() {



    return (
        <React.Fragment>
            <ScrollAnimation className="Bg-ourTeamGraphic" style={{position: 'absolute',right: 100}} animateIn="fadeIn" >
                <img  src={OurTeamGraphic} right={100} marginTop={20}/>
            </ScrollAnimation>
            <ScrollAnimation className="BgOut-OT-1" animateIn="fadeInRight" animateOut="fadeOutRight">
                <img src={OT_2} />
            </ScrollAnimation>

        </React.Fragment>
    )
}

export default BgOurTeam
