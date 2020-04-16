import React, {Component} from 'react';
import "./Comment.css";
import ProName from "./ProName";




export default class Commment extends Component {
    constructor () {
        super();
        this.state = {
            userObj: {
                userId: 0,
                inputStr: ""
            },
            arr: [],
            activeness: "buttonInact",
            EachComment: ""
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    
    }

    handleKeyPress = (e) => {

        let inputStr = e.target.value;
        this.setState({
            userObj: {
                id: 0,
                [e.target.name]: inputStr
        }})

        if (e.which === 13) {
            e.preventDefault();
            this.state.arr.push(this.state.userObj);
            //console.log(this.state.arr)
            this.createComment();
        }

        else if (this.state.userObj.inputStr) {
            this.setState({
                activeness: "buttonAct"
            })            
        }
        else if (e.which === 8 && !this.state.userObj.inputStr) {
            this.setState({
                activeness: "buttonInact"
            })
        }
    }


    handleClick = (e) => {
        let inputStr = e.target.value;
        this.setState({
            userObj: {
                id: 0,
                [e.target.name]: inputStr
        }})
        e.preventDefault();
        this.state.arr.push(this.state.userObj);
        this.createComment();
    }

    createComment = () => {
        this.setState({
            EachComment : this.state.arr.map(comment => (
                <div className="comLeft">
                    <div className="flexIt">
                        <div className="boldIt">
                            <ProName name="Jackleems" />
                        </div>
                        <div className="comLeftCon">
                            {comment.inputStr}
                        </div>
                    </div>
                </div>
                
            )
        )
        });
        
    }

    render () {
        return (
            <div>
                <div className="oldCom">
                    <div id="newCom" className="comment">
                        <div  className="comLeft">
                            <div className="comLeftCon">
                            <ProName name="Some_random_guy" /> 동감하는 바 입니다.
                            </div>
                            <div className="comTime">
                                42분전
                            </div>
                        </div>
                        {this.state.EachComment}
                    </div>
                </div>
                <div className="comAdd">
                    <div className="comAddCon">
                    <input type="text"
                        id="newComment" 
                        className="addComBox" 
                        placeholder="댓글 달기..." 
                        name="inputStr"
                        onKeyPress={this.handleKeyPress}
                    />
                    </div>
                    <div 
                    className="comPost">
                        <button 
                        className={`${this.state.activeness}`}
                        onClick={this.handleClick}
                        >게시</button>
                        
                    </div>
                </div>
            </div>

        )
    }

}