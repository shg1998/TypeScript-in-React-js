import React, {Component, PureComponent} from 'react';
import {MyPureComponentProps, MyPureComponentStates} from "./interface";
import MyReactMemo from "../MyReactMemo";

class MyPureComponent extends PureComponent<MyPureComponentProps, MyPureComponentStates> {

    constructor(props: MyPureComponentProps) {
        super(props);
        this.state = {
            name: 'Mohammad',
            address: {
                state: 'myState',
                city: 'myCity'
            }
        }
    }

    handleSetState = () => {
        // this.setState({name:'Ali'});
        const newAddressObject = {
            city: 'salam',
            state: 'chetori?'
        }
        this.setState({address: newAddressObject});
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Pure Component</h1>
               <MyReactMemo address={this.state.address} name={this.state.name}/>
                <button onClick={this.handleSetState}>Set State</button>
            </div>
        );
    }
}

export default MyPureComponent;