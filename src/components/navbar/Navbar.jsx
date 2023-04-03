import React, { Component } from 'react';





// class Navbar extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//             <a href="#" className="navbar-brand">
//                 Navbar <span className="badge badge-pill bg-secondary">{this.props.totalCounters}</span>
//             </a>
//         </nav>
//         );
//     }
// }



const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
            Navbar <span className="badge badge-pill bg-secondary">{totalCounters}</span>
        </a>
    </nav>
    );
}
 

 
export default Navbar;