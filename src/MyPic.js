import React, { Component } from 'react';
import myPic from "./WeStagram/img/79477869_754644264944331_2893207708524085248_n.jpg";






class MyPic extends Component {
    render () {
        return (
            <img 
            className={`${this.props.alt}`} 
            src={myPic} />   
        )
    }
}

export default MyPic