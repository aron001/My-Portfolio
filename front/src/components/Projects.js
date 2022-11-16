import { Col, Container ,Tab ,Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'

import { ProjectCard } from "./projectCards";
import tursm from '../assets/img/tursm.png';
import film from '../assets/img/film.png';
import maya from '../assets/img/maya.png';
import mayama from '../assets/img/mayama.png';
import tursml from '../assets/img/tursml.png';


export const Projects =()=> {
    const projects=[
{
    title: "Movie Land",
        description: "it includes latest series films and movies ",
        imgUrl: film,
},
{
    title: "Maya Production",
        description: "Digtal data serving system for maya production",
        imgUrl: maya,
},
{
    title: "Visit Ethiopia",
        description: "it a system like social media that is a bridge for the turist the guider",
        imgUrl: tursm,
},
{
    title: "Maya Music",
        description: "Design and Developed using materialui nodejs express mongodb ",
        imgUrl: mayama ,
},
{
    title: "Movie Land",
        description: "it includes latest series films and movies",
        imgUrl: film,
},
{
    title: "turism",
        description: "Design and Developed using figma react material ui ",
        imgUrl: tursml,
},
    ];
        
   return(
    <div className="projall" >
    <section>
        <Container>
            <Row>
                <Col>
                
                <h2>Projects</h2>
                <p>these are the projects that I have developed using Reactjs and React Native  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    
               <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard 
                                    key={index}
                                    {...project}/>
                                )
                            } )
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Mobile Apps</Tab.Pane>
               </Tab.Content>
               
                </Tab.Container>
                
                </Col>
            </Row>
        </Container>
    </section>
    </div>
   )
    
 }