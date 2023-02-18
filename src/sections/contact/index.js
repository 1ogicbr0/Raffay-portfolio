import React, { useRef } from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import emailjs from '@emailjs/browser';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            error: false,
            show: false,
        }
        this.myform = React.createRef();
        this.show = this.show.bind(this)
    }
    static contextType = ThemeContext
    show() {
      this.setState({show : true})
    }

    check(val) {
        if (this.state.error && val === "") {
                return false
        } else {
            return true
        }
    }
    preventDefault(e) {
        e.preventDefault();
      }
    submit() {
        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            emailjs.sendForm("service_crtjzow","template_4jqyrut", this.myform.current, "OGer-3Aud3gZj1OF9")
            .then((result) => {
                console.log('Submit',result.status)
            }, (error) => {
                console.log("ERROR",error)
            });
            this.setState({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        }
    }
    render() {
        return (
            <section id={`${this.props.id}`} className="contact" style={{height: this.context.height}}>
                <Row>
                    <Col md={2} className="side">
                        <h2>
                            <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                        </h2>
                    </Col>
                    <Col md={5} className="form">
                        {this.form()}
                    </Col>
                    <Col md={5} className="map">
                        {this.map()}
                    </Col>
                </Row>
            </section>
        )
    }

    form() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={0} animation="fadeInUp fast">
                <form ref={this.myform} className="form-container" onSubmit={this.preventDefault}>
                    <div className="line-text">
                        <h4>Get In Touch</h4>
                        <AnimationContainer delay={50} animation="fadeInUp fast">
                            <div className="form-group">
                                <input name="from_name" type="text" className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Name" onChange={e => this.setState({name: e.target.value})} value={this.state.name} />
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={100} animation="fadeInUp fast">
                        <div className="form-group">
                            <input name="email" type="text" className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({email: e.target.value})} value={this.state.email} />
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={150} animation="fadeInUp fast">
                            <div className="form-group">
                                <input name="phone" type="text" className="phone" placeholder="Phone" onChange={e => this.setState({phone: e.target.value})} value={this.state.phone}/>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={200} animation="fadeInUp fast">
                        <div className="form-group">
                            <textarea name="message" className={`message ${this.check(this.state.message) ? "" : "error"}`} placeholder="Message" onChange={e => this.setState({message: e.target.value})} value={this.state.message}></textarea>
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={250} animation="fadeInUp fast">
                        <div className="submit">
                            <button className={`hover-button ${this.state.error ? "error" : ""}`} onClick={() => this.submit()}>
                                <span>Send Message</span>
                            </button>
                        </div>
                        </AnimationContainer>
                    </div>
                </form>
                </AnimationContainer>
            )
        }
    }

    map() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={1000} animation="fadeIn fast" height={this.context.height}>
                    {/* <iframe title="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532864.8590976354!2d67.29584569611212!3d30.14960508892355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1668069193841!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe title="map" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532864.8590976354!2d67.29584569611212!3d30.14960508892355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1668069193841!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    {/* <iframe title="map" width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/> */}
                </AnimationContainer>
            )
        }
    }

}

export default Contact