import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Cards from "../../components/Cards"
import "./resultPage.css"
import Searchinput from "../../components/Searchinput";
import Footer from "../../components/Footer"

const resultPage = () => (
  <div>
    <Searchinput/>
   <div class="container">
    <div className="section">
      <div className="row">
        <div calssName="col s12">
          <div className="section">
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    <Footer/>
  </div>
);

export default resultPage;
