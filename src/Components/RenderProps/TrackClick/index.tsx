import React, {Component} from 'react';
import {TrackClickProps, TrackClickState} from "./interface";

class TrackClick extends Component<TrackClickProps, TrackClickState> {

    constructor(props: TrackClickProps) {
        super(props);
        this.state = {
            clickCount: 0,
        }
    }

    handleClick = () => {
        this.setState({clickCount: this.state.clickCount + 1});
    }

    render() {
        const {renderProps} = this.props;
        return (
            <div onClick={this.handleClick}>
                {renderProps(this.state.clickCount)}
            </div>
        );
    }
}

export default TrackClick;