import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons';
import testingIcon from '../../../content/images/testing.png'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faList,
  faCheckDouble,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Motion Graphics</h4>
              <p>
                My Figma skills will help you create smooth transitions and motion graphics for your app
                or website. To name a few, I am capable of creating easing, offsets, delays, parenting,
                transformation, value changes, masking, overlays, cloning, and parallax.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                I can help you reach success for your small or large business with my creative and
                analytical skills. It will be my pleasure to assist you with any challenge you might face
                with my knowledge of UI, UX, and Motion Graphics! In recent years, I have satisfied
                many clients successfully, so you won't be disappointed.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <img src={testingIcon} alt="test-icon" />
              </div>
              <h4 id="ux-research">UX Research</h4>
              <p>
                I will conduct studies or interviews that examine how people use a product By asking users to
                complete tasks on an app or website, I will identify pain points that users are
                experiencing and explore how products can help solve those problems, and I will
                evaluate the usability of existing products.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} className="solid" />
              </div>
              <h4>Visual Design</h4>
              <p>
                I will focus on how a product or technology looks, designing logos, illustrations, and icons, as well as deciding on font color, size, placement, and visual layout of each page or screen and making all of the design elements fit together in a visually appealing way.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} className="solid" />
              </div>
              <h4>Wireframing</h4>
              <p>
                I will draw wireframes by hand or digitally using software such as Figma, which can be hi-fi or lo-fi. Wireframing helps you bring your design ideas to life, so other people on your team can provide input and feedback.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Prototyping</h4>
              <p>
                With Figma, I can create both low-fidelity and high-fidelity prototypes to demonstrate the functionality of an app or website, such as the transition between screens or how the product feels and looks.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={5}
                text="Happy Clients"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={50}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={10}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faEdit}
                value={30}
                text="UI Designs"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
