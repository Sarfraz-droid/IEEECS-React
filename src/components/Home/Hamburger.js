import React,{useState} from 'react'

import HamburgerIcon from "../../images/Hamburger.svg"

import Cross from "../../images/OnMenuCross.svg"


function Hamburger() {

    const [Clicked, setClicked] = useState(false);

    const style={
        Dark:{
            backgroundColor: Clicked? 'rgba(0, 0, 0, .60)' : 'rgba(0, 0, 0, 0)',
        },
        Menu:{
            left: Clicked? 0 : '-50%',
        }
    }

    return (
        <div className="hamburger">
            <img className="icon" src={HamburgerIcon} onClick={() => setClicked(!Clicked)} />
            <div className="dark_bg" style={style.Dark} onClick={() => setClicked(false)}/>
            <div className="Menu" style={style.Menu}>
                <img className="cross" src={Cross} onClick={() => setClicked(!Clicked)}/>
                <ul>
                    <li>
                        Our Team
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger
