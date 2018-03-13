import React from "react";
import { Link } from "react-router-dom";
import "./Searchinput.css";

const imgstyle = {
    width:"1834px",
    display:"block",
    transform:"translate3d(-50%, 327px,0px)"
}


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Searchinput = props => (
    <div>
        <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot">
                <div class="container">
                    <br/>
                    <br/>
                    <h1 class="header center text-text text-lighten-2 font">Find the tools you want and</h1>
                    <h1 class="header center text-text text-lighten-2 font">share the tools you have</h1>

                        

                        <nav>
                            <div className="nav-wrapper">
                            <form>
                                <div className="input-field">
                                <input id="search" type="search" placeholder="What can we help you find today?" required/>
                                
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                                </div>
                            </form>
                            </div>
                        </nav>
                
                
                </div>
            </div>    

            <div class="parallax">
                <img src="https://www.socialtalent.com/wp-content/uploads/2015/09/tools_cropped.jpg" alt="" style={imgstyle}/>
            </div>
        </div>
        
    </div>
);

export default Searchinput;