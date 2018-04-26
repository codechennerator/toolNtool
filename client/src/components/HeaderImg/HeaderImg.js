import React, { Component }from "react";
import { Icon, Container,  Grid, Header,  List, Segment } from "semantic-ui-react";
import HeaderImg1 from "../img/header1.jpeg";
import HeaderImg2 from "../img/header2.png";
import HeaderImg3 from "../img/header3.jpg";
import './HeaderImg.css';

const pics = [
    HeaderImg1,
    HeaderImg2,
    HeaderImg3,
  ];

class HeaderImg extends Component {
    constructor(props) {
        super(props);
        const idxStart = 0;
        this.state = {
          index: idxStart,
          next: this.getNextIndex(idxStart),
          move: false,
        };
      }
    
      getNextIndex(idx) {
        if (idx >= pics.length - 1) {
          return 0;
        }
        return idx + 1;
      }
    
      setIndexes(idx) {
        this.setState({
          index: idx,
          next: this.getNextIndex(idx)
        });
      }
    
      componentDidMount() {        
        setInterval(() => {
          // On
          this.setState({
            move: true
          });
          // Off
          setTimeout(() => {
            this.setState({
              move: false
            });
            this.setIndexes(this.getNextIndex(this.state.index));
          }, 3000); // CSS Transition Delay
    
        }, 2000); // Next Slide Delay
      }
      render() {
        const move = this.state.move ? 'move' : '';
        if (this.state.move) {
    
        }
        return (
          <div className="mask">
            <div className="pic-wrapper">
              <div className={`current pic ${move}`}>
                {/* {this.state.index} */}
                <img src={pics[this.state.index]} alt="" />
              </div>
              <div className={`next pic ${move}`}>
                {/* {this.state.next} */}
                <img src={pics[this.state.next]} alt="" />
              </div>
            </div>
          </div>
        );
      }
  }

export default HeaderImg;