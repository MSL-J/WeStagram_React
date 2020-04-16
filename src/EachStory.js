import React, { Component } from 'react';
import "./EachStory.css";
import MyPic from "./MyPic";
import ProName from "./ProName";

class EachStory extends Component {
    constructor () {
        super();
        this.state ={
            userStory:{
                storyId:0
            },
            arrStory:[],
            oneStory: "",
            storyNum: 5
        }
    }
    
    pushStory = () => {
        for (let i=0; i <this.state.storyNum;i++) {
            this.state.arrStory.push(this.state.oneStory);
            this.createStory();
        }
        
    }


    createStory = () => {
        this.setState({
            oneStory : this.state.arrStory.map(() => (
                <div className="eachStory">
                    <div className="">
                        <MyPic alt="storyProPic" />
                    </div>
                    <div className="storyNameTime">
                        <ProName name="Jackleems" />
                        <div className="storyTime">
                            16분 전
                        </div>
                    </div>
                </div>
            ))
        })
    }

    componentDidMount () {
        this.pushStory();
      }

    render () {
        return (
            <div>
                <div className="myProfile">
            <div className="">
              <MyPic
              alt="rightProPic"/>
            </div>
            <div className="proNameDes">
              <ProName name="Jackleems" />
              <div className="proDes">
                Minseok Lee, 이민석
              </div>
            </div>
            </div>
            <div className="storyContainer">
                <div className="storyTop">
                    <div className="storyText">
                        스토리
                    </div>
                <div className="storyAll">
                    <b 
                    onClick={this.pushStory}
                    >더보기</b>
                </div>
            </div>
            <div className="stories">
                {this.state.oneStory}
            </div>
          </div>
            </div>
        )
    }
}

export default EachStory