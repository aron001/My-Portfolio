import { useState, useEffect } from "react";
import './Navbar.css';
import {Container, Col,Row} from "react-bootstrap"
import 'animate.css';

import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/headerImg.jpg';
import me from '../assets/img/me.jpeg';

export const Banner = ()=> {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate= ["web Developer","Mobile App Developer","Full Stack Developer"];
    const [text, setText]= useState('');
    const [delta, setDelta]= useState(300 -Math.random() * 100);
    const period =2000;

    useEffect(()=> {
        let ticker = setInterval(()=> {
        tick();
        },delta )
       
        return()=> {clearInterval(ticker)};
    },[text])

    const tick = ()=>{
        let i= loopNum % toRotate.length;
        let fullText = toRotate [i];
        let updatedText= isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)
        
        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
    return(
<section className="banner" >
    <Container>
        <Row className="align-items-center" >
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__heartBeat" : ""}>
                <span className="tagline">
                    Welcome To My Portifello
                </span>
                <h1>{'Hi I`m Aron '}<span className="wrap">{text}</span></h1>
                <p>i am full stack web developer using react nodejs express mongo db and i have also mobile application developer using react native i can also develope a website using wordpress </p>
                <button onClick={()=> console.log("connect")}>
                    Let's Connect
                </button>
                </div>}
                </TrackVisibility>
                </Col>

                <div className="r">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={me} alt="Headder Img"/> 
                </div>}
                </TrackVisibility>
                </Col>
                </div>
                
                </Row>
    </Container>
    </section>

    )}