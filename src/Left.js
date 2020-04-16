import React, { Component } from 'react';
import "./Left.css"
//import "./WeStagram/js/main";
import MyPic from "./MyPic";
import ProName from "./ProName";
import Comment from "./Comment";
import more from "./WeStagram/img/more.png";
import download from "./WeStagram/img/download.jpg";
import heart from "./WeStagram/img/heart.png";
import share from "./WeStagram/img/share.png";
import comment from "./WeStagram/img/comment.png";
import bookmark from "./WeStagram/img/bookmark.png";
import ComInput from './ComInput';


class Left extends Component {
    constructor () {
        super();
        this.state = {
            
        }
    }



    render () {
        return (
                <article className="feeds">
                    <div className="feed-name">
                    <div className="profileZone">
                        <MyPic alt="myPic"/>
                        <div id="myNameIs" className="myName">
                            <ProName name="Jackleems" />
                        </div>
                    </div>
                    <div className="dotdotdot">
                        <img className="dotx3" alt="dotx3" src={more} />
                    </div>
                    </div>
                    <div className="art-pic">
                        <img className="mainPic" alt="mainPic" src={download} />
                    </div>
                    <div className="pic-below">
                    <div className="pic-inter">
                        <div className="inter-3">
                            <img className="ThreePic" alt="share" src={share} />
                            <img className="ThreePic" alt="heart" src={heart} />
                            <img className="ThreePic" alt="comment"src={comment} />
                        </div>
                        <div className="pic-bookmark">
                            <img className="bookmark" alt="bookmark" src={bookmark} />
                        </div>
                    </div>
                    <div className="like">
                        <MyPic alt="likeProfile" />
                        <div className="likePpl">
                        <ProName name="Jackleems" />님 <b>외 10명</b>이 좋아합니다.
                        </div>
                    </div>
                    <div className="picDes">
                        <ProName name="Jackleems" /> 인스타그램 개발자분들 존경합니다...
                    </div>
                    <Comment />
                </div>
            </article>
        )
    }

}

export default Left