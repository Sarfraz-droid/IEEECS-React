import React from 'react'

import Svg from "../../Svg"

import FullCircle from "../../../images/Background/Circle.svg"
import HolloCircle from "../../../images/Background/Hollow_Circle.svg"
import ZigZag from "../../../images/Background/ZigZag.svg"
import Triangle from "../../../images/Background/Triangle.svg"
import CutCircle from "../../../images/Background/CutCircle.svg"
function BgHero() {
    return (
        <React.Fragment>
            <Svg src={FullCircle} top="230px" right="549px" rotate="0" scale="0.7" />
            <Svg src={FullCircle} top="160px" right="300px" rotate="0" scale="0.4" />

            <Svg src={HolloCircle} bottom="130px" left="80px" rotate="0" scale="0.7" />
            <Svg src={HolloCircle} top="220px" left="650px" rotate="0" scale="1" />
            <Svg src={HolloCircle} bottom="90px" right="350px" rotate="0" scale="0.5" />

            <Svg src={ZigZag} top="20px" left="-30px" rotate="0" scale="0.8" />
            <Svg src={ZigZag} top="-19px" left="700px" rotate="-25" scale="1" />
            <Svg src={ZigZag} bottom="60px" left="430px" rotate="-15" scale="0.8" />

            <Svg src={Triangle} top="120px" left="100px" rotate="45" scale="1" />
            <Svg src={Triangle} top="180px" right="350px" rotate="45" scale="1" />
            <Svg src={Triangle} top="40px" right="690px" rotate="45" scale="1" />
            <Svg src={Triangle} bottom="75px" left="410px" rotate="-15" scale="0.8" opacity="0.6" />

            <Svg src={CutCircle} bottom="250px" right="600px" rotate="0" scale="1" />

        </React.Fragment>
    )
}

export default BgHero
