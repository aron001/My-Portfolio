import { useRef } from "react";
import headerImg from '../assets/img/headerImg.jpg';
import { useState } from "react";
import 'animate.css';
import emailjs from 'emailjs-com';
import TrackVisibility from 'react-on-screen';
  
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit= (e)=> {
        e.preventDefault()
       emailjs
        .sendForm(
            "service_ucjryka",
            "template_h2ctxgq",
            formRef.current,
            "UCSiz3oCCi3OEAm-R"
        )
        .then(
            (result) => {
                console.log(result.text);
                setDone(true)
            }
        );
    }

    return (
<div className="c" id="contact">
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
            <h3>Let's Discuss About Business</h3>
            </div>}
                </TrackVisibility>
            
            <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__heartBeat" : ""}>
               <div>
                <img src={headerImg} alt=""/>
               </div>
               </div>}
                </TrackVisibility>
                </div>
                <div className="c-right">
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                    <p><b>what is your story?</b>  Get in touch always avalible for freelancing</p>
                    </div>}
                </TrackVisibility>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div >
                <input type="text" placeholder='Name' name="user_name"/>
                </div><input type="text" placeholder='Subject' name="user_subject"/>
                <input type="text" placeholder='Email' name="user_email"/>
                <textarea rows="5" placeholder='Message' name="message"/>
                <button>Submit</button>
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                {done && "Thank You you have Sucessfully Sent The Message"}
                </div>}
                </TrackVisibility>
            </form>
            </div>
        </div>

    </div>
    )
    
  }
  export default Contact;