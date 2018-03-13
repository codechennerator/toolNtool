import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Cards = props => (

        <div class="col s12 m3 14">
             <div class="card">
                 <div class="card-image">
                  <img height="164px"  src="https://1qx9t743aq6x10xhdx3g2njx-wpengine.netdna-ssl.com/wp-content/uploads/2013/12/social-media-tools-swiss-knife.jpg"/>
                </div>
                <div class="card-content">
                 <p>Title</p>
                 <p>Price</p>
                 <p>Description</p>
                 </div>
                
            </div>
            </div>
       

);

export default Cards;
