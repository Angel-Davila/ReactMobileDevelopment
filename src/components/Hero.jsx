import React from "react"
import "./style/Hero.css"

const Hero = props =>{
  return(
    <React.Fragment>
    <div className="Hero">
      <div className="Hero__color_filter" style={{height: props.h}}></div>
      <div className="Hero__img" style={{height: props.h}}>
          <img src={"https://images.pexels.com/photos/8271933/pexels-photo-8271933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" />
      </div>
    </div>

    </React.Fragment>
  )
}

export default Hero