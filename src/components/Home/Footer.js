import React from "react"

import IEEECS from "../../images/Footer/IEEE-CS_LogoTM-orange 2.png"

import Instagram from "../../images/Footer/SocialMedia/instagram.svg"
import Linkedin from "../../images/Footer/SocialMedia/linkedin.svg"
import Discord from "../../images/Footer/SocialMedia/discord.svg"
import Github from "../../images/Footer/SocialMedia/github.svg"

function Footer() {
  return (
    <div className="Footer">
      <h5>IEEE Computer Society Jamia Millia Islamia</h5>
      <ul className="Footer-list">
        <li>
          <img className="Logo" src={IEEECS} />
        </li>
        <li>
          <ul className="Footer-Menu">
            <li>Menu</li>
            <li>Home</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </li>
        <li>
          <ul className="Footer-Social">
            <li>Follow Us On :</li>
            <li>
              <ul>
                <li>
                  <a>
                    <img src={Instagram} />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Linkedin} />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Discord} />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Github} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Footer
