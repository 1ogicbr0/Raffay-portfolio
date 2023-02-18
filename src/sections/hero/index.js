import React from 'react'
import './styles.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import raffaypdf from '../../../content/raffay.pdf'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
import img1 from '../../../content/images//icons/1.png'
import img2 from '../../../content/images//icons/2.png'
import img3 from '../../../content/images/icons/3.png'
import img4 from '../../../content/images/icons/4.png'
import img5 from '../../../content/images/icons/5.png'
import img6 from '../../../content/images/icons/6.png'
import img7 from '../../../content/images/icons/7.png'
import img8 from '../../../content/images/icons/8.png'
import img9 from '../../../content/images/icons/9.png'
import img10 from '../../../content/images/icons/10.png'
import raffayImg from '../../../content/images/person2.jpg'

const imgArray = [
  img1,img2, img3,img4,img5,img6,img7,img8,img9,img10
]

class Hero extends React.Component {

  static contextType = ThemeContext;



  render() {


    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Hello, I'm</h4>
              </div>
              <Glitch text="Raffay Bin Moazzam" />
              <Typewriter
                options={{
                  strings: [
                    'UI/UX Designer',
                    'Motion Graphics Designer',
                    'Creative Content Creater',
                    'Video Games Collector',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <button className="hover-button">
                  <a href={raffaypdf} download>Download Resume</a>
              </button>
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className="img">
            <img
              src={raffayImg}
              alt="person"
            />
          </Col>
        </Row>
      </section>
    )
  }

  icons() {
    console.log(this.props.icons)
    return imgArray.map((value, index) => {
      return (
        <img
          src={value}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`,
          }}
          alt="Designer"
          key={index}
        />
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(jpg)/" }
            relativePath: { eq: "1.jpg" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000)
                {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
)
