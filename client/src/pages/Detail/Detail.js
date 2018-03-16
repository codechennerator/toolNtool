import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Cards from "../../components/Cards"
import "./Detail.css"
import Searchinput from "../../components/Searchinput";
import Footer from "../../components/Footer"
import NonhomepageNav from "../../components/NonhomepageNav"

// const detail = () => (
//   <div>
//     <NonhomepageNav />
//     <div class="container">
//     <div className="section">
//       <div className="row">
//         <div calssName="col s12">
//           <div className="section">
//            <Cards/>
//            <Cards/>
//            <Cards/>
//            <Cards/>
//            <Cards/>
//            <Cards/>
//            <Cards/>
//            <Cards/>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
 
//     <Footer/>
//   </div>
// );

// export default detail;

class Detail extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res =>{
        // console.log(res)
        this.setState({ post: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.post)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

              <h1>
                {this.state.post.title} by {this.state.post.user}
              </h1>

          </Col>
        </Row>

        <Row>
          <Col size="md12">
          
          <img src={this.state.post.img} />

          </Col>
          </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Description</h3>
              <h4>
                {this.state.post.description}
              </h4>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/findAll">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default (Detail);
