import React, { Component } from 'react';
import "./EachRec.css";
import MyPic from "./MyPic";
import ProName from "./ProName";



class EachRec extends Component {
  constructor () {
    super();
    this.state ={
        userRec:{
            recId:0
        },
        arrRec:[],
        oneRec: "",
        recNum: 3
    }
}





pushRec = () => {
    for (let i=0; i <this.state.recNum;i++) {
        this.state.arrRec.push(this.state.oneRec);
        this.createRec();
    }
    
}


createRec = () => {
    this.setState({
        oneRec : this.state.arrRec.map(() => (
        <div className="eachRec">
          <div className="eachRecPro">
          <div className="">
            <MyPic alt="recProPic" />
          </div>
          <div className="recNameTime">
            <ProName name="Jackleems" />
            <div className="recTime">
              16분 전
            </div>
          </div>
        </div>
        <div className="recFollow">
          <button>
            팔로우
          </button>
          </div>
        </div>
        ))
    })
  }

  componentDidMount () {
    this.pushRec();

  }



    render () {
        return (
          <div className="rec">
            <div className="recTop">
              <div className="recText">
                회원님을 위한 추천
              </div>
              <div className="recAll">
                <b 
                onClick={this.pushRec}
                >더보기</b>
              </div>
            </div>
              <div className="recs">
                {this.state.oneRec}
              </div>
          </div>
          
            
        )
    }
}

export default EachRec