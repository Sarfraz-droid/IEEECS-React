import React,{useState} from "react"

import ContactBall from "../../images/ContactUs/ContactBall.svg"
import ContactBall2 from "../../images/ContactUs/ContactBall2.svg"
import Wire from "../../images/ContactUs/ContactWire.svg"
import Line from "../../images/ContactUs/ContactLine.svg"
import Form from "../../images/ContactUs/ContactUsForm.svg"

import emailjs from "emailjs-com"

import Svg from "../Svg"
import ScrollAnimation from "react-animate-on-scroll"

import Instagram from "../../images/ContactUs/SocialMediaIcon/instagram.svg"
import Github from "../../images/ContactUs/SocialMediaIcon/github.svg"
import Discord from "../../images/ContactUs/SocialMediaIcon/discord.svg"
import WhatsApp from "../../images/ContactUs/SocialMediaIcon/whatsapp.svg"
import LinkedIn from "../../images/ContactUs/SocialMediaIcon/ContactBall.svg"

import creds from "../../json/creds.json";

function ContactUs() {
  
  const [msg, setmsg] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    setmsg("Sending email...");

    emailjs.sendForm(creds.service, creds.tempid, e.target, creds.userid)
      .then((result) => {
        setmsg("Email sent!");
        setTimeout(() => {
          setmsg("")
        }, 10000);
        console.log(result);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contactUs">
      <ScrollAnimation animateIn="fadeIn">
        <h1>
          <img className="ContactBall" src={ContactBall} />
          Contact Us
          <img className="ContactBall" src={ContactBall2} />
          <Svg src={Wire} right={500} marginTop={-25} rotate="1" scale="0.9" />
          <img className="ContactLine" src={Line} />
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInDown">
      <ul>
        <li>ieeecsjmi@gmail.com</li>
        <li>Jamia Millia Islamia, New Delhi</li>
      </ul>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
      <form autoComplete="none" onSubmit={sendEmail}>
          <div className="input_type">
              <input type="text" className="Name" placeholder="Name" autoComplete="none" name="ieee_name" aria-autocomplete="off"/>
              <input type="text" className="Name" placeholder="Email" autoComplete="none" name="ieee_email"/>
          </div>
          <div className="input_message">
                <textarea className="Message" placeholder="Message" rows="20" col="10" name="ieee_message"/>
                <button>Send</button>
                <p>
                  {msg}
                </p>
          </div>

      </form>
      </ScrollAnimation>
      <ul className="Social">
          <li>
              <a href="#">
                <img src={Instagram}/>
              </a>
          </li>
          <li>
              <a href="#">
                <img src={Github}/>
              </a>
          </li>
          <li>
              <a href="#">
                <img src={WhatsApp}/>
              </a>
          </li>
          <li>
              <a href="#"> 
                <img src={Discord}/>
              </a>
          </li>
          <li>
              <a href="#"> 
                <img src={LinkedIn}/>
              </a>
          </li>
      </ul>
    </div>
  )
}

export default ContactUs
