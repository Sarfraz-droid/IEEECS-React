import React from "react"

import { Team } from "../../json/Team"

import { StaticImage } from "gatsby-plugin-image"
import LinkdIn from "../../images/TeamMembers/Linkedin.svg"

function OurTeam() {
  return (
    <div className="Ourteam">
      <h1>Our Team</h1>
      <p>
        “Coming together is a beginning. Keeping together is progress. Working
        together is success.”
      </p>

      <div className="OurTeam-div">
        {Team.map((team, index) => {
          return (
            <div className="team-grid">
              {team.map((member, index) => {
                return (
                  <div className="team-member">
                    <div className="Profile">
                      <img
                        className="Profile-pic"
                        src={member.img}
                        alt={member.name}
                      />
                      <a href="#">
                        <img className="linkedin" src={LinkdIn} />
                      </a>
                    </div>
                    <h2>{member.name}</h2>
                    <p>{member.title}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurTeam
