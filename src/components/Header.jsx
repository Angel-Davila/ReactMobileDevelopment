import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Header">
          <Link to="/">
            <img src="https://image.flaticon.com/icons/png/512/3227/3227673.png" alt="logo" />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;