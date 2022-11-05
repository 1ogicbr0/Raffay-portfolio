import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmilia, faDribbble, faGithub, faInstagram, faLinkedin, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a UI/UX Designer working from home</h3>
                            <div className="separator" />
                            <p>Creative Ui and UX Designer with up-to-date knowledge of design. Establishes and promotes design guidelines, best practices and standards. Brings excellent visual design skills with sensitivity to user-system interaction. I am quality oriented person,who gives the best result</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faDribbble} className="social_icon" onClick={() => window.open('https://dribble.com/RaffayBinMoazzam')}/>
                                <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('hhttps://www.instagram.com/raffaybinmoazzam')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                                <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/ui-ux-designer-figma-adobexd')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Motion Graphics" value={90} delay={1100} />
                                <Progress name="UI Design" value={90} delay={1100} />
                                <Progress name="UX Design" value={90} delay={1100} />
                                <Progress name="UX Research" value={40} delay={1100} />
                                <Progress name="Usability Testing" value={30} delay={1100} />
                                <Progress name="Prototyping" value={50} delay={1100} />
                                <Progress name="Wireframing" value={80} delay={1100} />
                                <Progress name="Visual Design" value={70} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero