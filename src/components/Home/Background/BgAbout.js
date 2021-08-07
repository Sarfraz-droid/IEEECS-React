import React from 'react'

import Svg from "../../Svg"

import FullCircle from "../../../images/Background/Circle.svg"
import HollowCircle from "../../../images/Background/Hollow_Circle.svg"
import ZigZag from "../../../images/Background/ZigZag.svg"
import Triangle from "../../../images/Background/Triangle.svg"
import CutCircle from "../../../images/Background/CutCircle.svg"
import FillArc from "../../../images/Background/Fill_arc.svg"

import AboutArc from "../../../images/AboutUs/About_Arc.svg"

function BgAbout() {
    return (
        <div>
            <Svg src={FillArc} top = {840} left={500} rotate="0" scale="1"/>

            <Svg src={Triangle}  top = {740} left={500} rotate="30" scale="1"/>
            <Svg src={Triangle}  top = {770} right={200} rotate="-60" scale="0.5"/>
            <Svg src={Triangle}  top = {1470} right={700} rotate="-45" scale="0.7"/>

            <Svg src={ZigZag} mdisplay="none"  top = {920} right={150} rotate="-10" scale="1"/>
            <Svg src={ZigZag} mdisplay="none"  top = {1100} left={150} rotate="-30" scale=".6"/>

            <Svg src={CutCircle}  top = {985} left={400} rotate="150" scale="0.9"/>
            <Svg src={CutCircle}  top = {1150} right={200} rotate="150" scale="0.5" mtop={900} mdisplay="none"/>

            <Svg src={FullCircle} top = {1200} left={500} rotate="-90" scale="0.5"/>

            <Svg src={AboutArc} top = {1140} left={-30} rotate="0" scale="1" zIndex="-1" mtop={900}/>
        </div>
    )
}

export default BgAbout
