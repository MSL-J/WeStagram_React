import React, { Component } from 'react';
import "./Right.css";
import MyPic from "./MyPic";
import EachStory from "./EachStory";
import EachRec from "./EachRec";
import Footer from "./Footer";
import ProName from "./ProName";




class Right extends Component {
    render () {
        return (
        <div className="main-right">
          <EachStory />
          <EachRec />
          <Footer />
        </div>

        )
    }
}

export default Right