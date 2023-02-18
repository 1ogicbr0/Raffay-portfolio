import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmilia, faBehance, faDribbble, faGithub, faInstagram, faLinkedin, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
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
                            {/* <h3>I'm a UI/UX Designer from <span>Pakistan</span></h3> */}
                            <h3>I'm a UI/UX Designer</h3>
                            <div className="separator" />
                            <p>Creative UI and UX Designer with up-to-date knowledge of design. Establishes and promotes design guidelines, best practices and standards. Brings excellent visual design skills with sensitivity to user-system interaction. I am quality oriented person,who gives the best result</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faDribbble} className="social_icon" onClick={() => window.open('https://dribbble.com/RaffayBinMoazzam')}/>
                                <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/raffaybinmoazzam')}/>
                                <FontAwesomeIcon icon={faEnvelope} className="social_icon" onClick={() => window.open('mailto:raffay@example.com')} />
                                <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com/channel/UCsrqQoMQdE441tdv448xroA')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/ui-ux-designer-figma-adobexd')} />
                                <FontAwesomeIcon icon={faBehance} className="social_icon" onClick={() => window.open('https://www.behance.net/raffaymoazzam')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Motion Graphics" value={70} delay={1100} />
                                <Progress name="UI Design" value={85} delay={1100} />
                                <Progress name="UX Design" value={80} delay={1100} />
                                <Progress name="UX Research" value={60} delay={1100} />
                                <Progress name="Usability Testing" value={70} delay={1100} />
                                <Progress name="Prototyping" value={70} delay={1100} />
                                <Progress name="Wireframing" value={75} delay={1100} />
                                <Progress name="Visual Design" value={80} delay={1100} />
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
                            "value": 80,
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
                            "value": 2
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero