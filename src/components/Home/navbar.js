import React from "react"

import Bg from "../../images/Hero/Hero-TopLeftCover.svg"
import Logo from "../../images/Hero/IEEE CS Logo.png"

import ScrollAnimation from "react-animate-on-scroll"

function navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
        <img src={Bg} />
        <img className="logo" src={Logo} />
    </div>
  )
}

export default navbar
