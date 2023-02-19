import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import Tilt from 'react-tilt'
import ThemeContext from '../../context';
import case_study_image_1 from '../../../content/portfolio/case_study/cinepax_image.jpg'
import cinePaxPdf from '../../../content/portfolio/case_study/cinepax.pdf';
import case_study_image_2 from '../../../content/portfolio/case_study/plantree_image.jpg'
import plantreePdf from '../../../content/portfolio/case_study/plantree.pdf'
import case_study_image_3 from '../../../content/portfolio/case_study/food_app_image.png'
import foodappPdf from '../../../content/portfolio/case_study/foodApp.pdf' 

import motion_graphics_image_1 from '../../../content/portfolio/motion_graphics/smartHome.jpg'
import smart_home from '../../../content/portfolio/motion_graphics/smartHomeGif.mp4'
import motion_graphics_image_2 from '../../../content/portfolio/motion_graphics/photoInspiration.jpg'
import photo_inspiration from '../../../content/portfolio/motion_graphics/photoInspirationGif.mp4'
import motion_graphics_image_3 from '../../../content/portfolio/motion_graphics/foodApp.png'
import food_app_motion from '../../../content/portfolio/motion_graphics/foodAppGif.mp4'
import motion_graphics_image_4 from '../../../content/portfolio/motion_graphics/plentree.png'
import plentree from '../../../content/portfolio/motion_graphics/plentreeGif.mp4'
import motion_graphics_image_5 from '../../../content/portfolio/motion_graphics/natGeo1.png'
import nat_Geo_1 from '../../../content/portfolio/motion_graphics/natGeo1Gif.mp4'
import motion_graphics_image_6 from '../../../content/portfolio/motion_graphics/natGeo2.png'
import nat_Geo_2 from '../../../content/portfolio/motion_graphics/natGeo2Gif.mp4'

const imageSet = [
  {
    id: 1,
    image: case_study_image_1,
    title: "Cine Pax",
    category: "Case Study",
    pdf: cinePaxPdf
  },
  {
    id: 2,
    image: case_study_image_2,
    title: "Plen Tree",
    category: "Case Study",
    pdf:plantreePdf
  },
  {
    id: 3,
    image: case_study_image_3,
    title: "Food App",
    category: "Case Study",
    pdf:foodappPdf
  },
  {
    id: 4,
    image: motion_graphics_image_1,
    title: "Smart Home",
    category: "Motion Graphics",
    video:smart_home
  },
  {
    id: 5,
    image: motion_graphics_image_2,
    title: "Photo Inspiration",
    category: "Motion Graphics",
    video:photo_inspiration
  },
{
  id: 6,
  image: motion_graphics_image_3,
  title: "Food App",
  category: "Motion Graphics",
  video: food_app_motion
},
{
  id: 7,
  image: motion_graphics_image_4,
  title: "Plen Tree",
  category: "Motion Graphics",
  video: plentree
},
{
  id: 8,
  image: motion_graphics_image_5,
  title: "Nat Geo 1",
  category: "Motion Graphics",
  video: nat_Geo_1
},
{
  id: 9,
  image: motion_graphics_image_6,
  title: "Nat Geo 2",
  category: "Motion Graphics",
  video: nat_Geo_2
}
]

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    const  items  = imageSet
    this.state = {
      category: null,
      col:
        items.length > 6
          ? 4
          : items.length > 4
            ? 3
            : items.length > 3
              ? 2
              : items.length > 1
                ? 2
                : 1,
      items: imageSet,
      showPortfolio: false,
    }
    this.showPortfolio = this.showPortfolio.bind(this)
  }
  static contextType = ThemeContext

  showPortfolio() {
    this.setState({ showPortfolio: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="portfolio"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Portfolio"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.showPortfolio}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={10} className="recent-works">
            <div className="portfolio_selector">
              <button
                className="portfolio_category"
                onClick={() => this.changeCategory(null)}
              >
                <span className={`${!this.state.category ? 'active' : ''}`}>
                  All
                </span>
              </button>
              {this.categories()}

              <button
                className="portfolio_category"
                onClick={() => this.changeCategory(null)}
              >
              </button>

            </div>

            <div className="content">
              <div
                className="portfolio_container"
                style={{
                  maxHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.8
                      : 'inherit',
                }}
              >
                {this.items()}
              </div>
            </div>
          </Col>
        </Row>
      </section>
    )
  }

  items() {
    if (this.state.showPortfolio || this.context.height === 'auto') {
      const { items } = this.state
      return items.map((value, index) => {
        if (
          value.category === this.state.category ||
          !this.state.category
        ) {
          if (value.image) {
            return (
              <div
                className="portfolio_item"
                style={{
                  width:
                    this.context.height === 'auto'
                      ? '100%'
                      : this.state.col === 4
                        ? '25%'
                        : this.state.col === 3
                          ? '33.3%'
                          : this.state.col === 2
                            ? '50%'
                            : '100%',
                }}
                key={index}
              >
                <AnimationContainer delay={200} animation="fadeIn" key={index}>
                  <img
                    src={
                      value.image
                    }
                    alt={value.title}
                    style={{
                      maxHeight: `${this.context.height *
                        (this.state.col >= 2
                          ? 0.4
                          : this.getItemCount(
                            value.category
                          ) === 4
                            ? 0.36
                            : 1)}px`,
                    }}
                  />
                  <Tilt className="Tilt" options={{ scale: 1, max: 50 }}>
                    <div className="overlay">
                     {value.gif && <img src={value.gif} />}
                     {value.video && <video src={value.video}  autoPlay="false" loop muted/>}
                      {!value.gif && !value.video && <span className="title">
                        {value.title}
                        <br/>
                     {value.pdf && <a href={value.pdf} download>Check Case Study</a>}
                      </span>}
                    </div>
                  </Tilt>
                </AnimationContainer>
              </div>
            )
          }
        }
        return false
      })
    }
  }

  getItemCount(category) {
    let total = 0
    this.state.items.forEach(v => {
      if (v.category === category || !category) total++
    })
    return total
  }

  changeCategory(category) {
    const  items  = imageSet
    this.setState({ items: [] })
    let total = 0
    items.forEach(v => {
      if (v.category === category || !category) total++
    })
    let col = total > 6 ? 4 : total > 4 ? 3 : total > 3 ? 2 : total > 1 ? 2 : 1

    this.setState({ category: category, col: col })
    setTimeout(() => {
      this.setState({ items: items })
    }, 50)
  }

  categories() {
    const  items  = imageSet
    let categories = []
    for (var v of items) {
      categories.push(v.category)
    }
    categories = [...new Set(categories)]
    return categories.map((value, index) => {
      return (
        <button
          className="portfolio_category"
          onClick={() => this.changeCategory(value)}
          key={index}
        >
          <span className={`${this.state.category === value ? 'active' : ''}`}>
            {value}
          </span>
        </button>
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
          query {
            items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, 
            # The layout is built for 6 portfolio items #
            limit: 6) {
              edges {
                content: node {
                  html
                  frontmatter {
                    id
                    title
                    category
                    image 
                  }
                }
              }
            }
          }      
        `}
    render={({ items }) => <Portfolio items={items.edges} {...props} />}
  />
)
