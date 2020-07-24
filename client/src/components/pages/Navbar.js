import React, { Component } from 'react';
import '../../styles/Dashboard.css'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    var statement = "Unknown"
    // console.log(this.props.account)
    return (
      
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto ">
  <li className="nav-item text-nowrap d-none d-sm-none d-sm-block text-white">
          Welcome {this.props.account.fullname}
        </li>
        </ul>
        <ul className="navbar-nav py-2">
        
        <li className="nav-item px-2">
          <Link to="/auth" className="btn btn-light">Logout</Link>
          </li>
        </ul>

  </div>
</nav>
);
          }
        }


export default Navbar;