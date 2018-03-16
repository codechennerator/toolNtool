import React from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import Cards from "../../components/Cards"
import "./signIn.css"
// import Searchinput from "../../components/Searchinput";
import Footer from "../../components/Footer"
import NonhomepageNav from "../../components/NonhomepageNav"

const signIn = () => (
  <div>
    <NonhomepageNav />
   
    <div class="row">
    <form class="col s6">
    
      <div class="row">
        <div class="input-field col s6">
            <input id="last_name" type="text" class="validate"/>
            <label for="create_username">Enter Your User Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="password" type="password" class="validate"/>
          <label for="password">Enter Your Password</label>
        </div>
      </div>
    
      <div class="row">
       <a class="waves-effect waves-light btn-large">Submit</a>
     </div>
    </form>
  </div>

 
    <Footer/>
  </div>
);

export default signIn;