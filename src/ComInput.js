import React, {Component} from 'react';
import './ComInput.css';
import Button from "./Button"




export default class ComInput extends Component {
    
    constructor() {
        super();
        
        this.state = {
            inputStr: "",
            activeness: "buttonInact"
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleCom = (e) => {
        this.setState({
            inputStr: e.target.value
        })
    }


    handleKeyUp = (e) => {
        if (this.state.inputStr) {
            this.setState({
                activeness: "buttonAct"
            })            
        }
        else if (e.keyCode === 8 && !this.state.inputStr) {
            this.setState({
                activeness: "buttonInact"
            })
        }
    }

    render () {
        return (
                <div className="comAdd">
                    <div className="comAddCon">
                    <input type="text"
                        id="newComment" 
                        className="addComBox" 
                        placeholder="댓글 달기..." 
                        value={this.state.inputStr}
                        onChange={this.handleCom}
                        onKeyUp={this.handleKeyUp}
                    />
                    </div>
                    <div 
                    className="comPost">
                        <button 
                        className={`${this.state.activeness}`}>게시</button>
                        
                    </div>
                </div>
        
        )
    }
}



   

