import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import SignIn from '../../components/SignIn';



export default class SignUp extends Component {
    render() {
        return(
            <div>
                <SignIn />
            </div>
        )
    }
}


// const fontStyle={
//     fontSize: '1.2em',
//     fontWeight: 'normal',
//     display:"inline-block",
//     bottom:"15px",
    
// };
// const styles = {
//     modal: {
//         backgroundColor:"white",
//         width: "500px",
//         height: "500px",
//         position:"absolute",
//         zIndex: 5,
//         marginTop: "10%",
//         marginLeft: "5%"
//     },
//     text: {
//         fontSize:"20px",
//         color:"black"
//     },
//     button: {
//         padding: 0,
//         border: "none",
//         background: "none"
//     }
// }

// export default class SignInModal extends Component {

//     render(){
//         return(
//             <div>
//             <div style={styles.modal}>
//             <a href="/auth/google"><button style={styles.button}><p style={styles.text}>Hello</p></button></a>

//             </div>
//         </div>
//         )
//     }
// };
