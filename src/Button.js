import React, {Component} from 'react';





export default class Button extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick () {
        



    }


    render () {
        return (
            <button
            onClick={this.handleClick}
            >게시</button>
        )
    }
}
