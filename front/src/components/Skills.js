import {Container, Col, Row, } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills =() =>{
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max:4000, min:3000},
            items: 5
        },
        desktop: {
            breakpoint: {max:3000, min:1024},
            items: 3
        },
        tablet: {
            breakpoint: {max:1024},
            items: 2
        },
        mobile: {
            breakpoint: {max:464, min:0},
            items: 1
            
        }
    };
    return (
        <section className="skills" >
            <Container>
            <Row>
            <Col>
            <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__bounceIn" : ""}>
         <div className="skill-bx">
           <h2>Skills</h2>
          <p>that have the skils that i have  aquiered</p>
        <Carousel responsive={responsive} infinite={true} className="skills-slider">
            <div className="item">
                
            <h5>React</h5>
            </div>
            <div className="item">
                
            <h5>React Native</h5>
            </div>
            <div className="item">
                
            <h5>Express</h5>
            </div>
            <div className="item">
                
            <h5>Nodejs</h5>
            </div>
            <div className="item">
                
            <h5>MongoDb</h5>
            </div>
            <div className="item">
                
            <h5>MaterialUi</h5>
            </div>
            <div className="item">
                
            <h5>Wordpress</h5>
            </div>
        </Carousel>
            </div>
            </div>}
                </TrackVisibility>
                 </Col>
                </Row>
            </Container>
        </section>

    )
}
