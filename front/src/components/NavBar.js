import { useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import './Navbar.css';
export const NavBar = () => {
    const [activeLink, setActiveLink]=useState('home');
    const [scrolled, seScrolled]=useState(false);
    
    useEffect(()=> {
        const onScroll =()=> {
            if (window.scrollY > 50) {
                seScrolled(true);
    
            }else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return() =>window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink=(value) => {
        setActiveLink(value);
    }
    return(
        <div className="navbar">
<Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
           
            <Navbar.Toggle >
                 <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects' ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                Projects
            </Nav.Link>
            <Nav.Link href="#contact" className={activeLink==='contact' ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                Contact
            </Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://t.me/Ashu_aron"><img src={''} alt=""/></a>
                    <a href="https://t.me/Ashu_aron"><img src={''} alt=""/></a>
                    <a href="https://t.me/Ashu_aron"><img src={''} alt=""/></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>lets connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    
)
}