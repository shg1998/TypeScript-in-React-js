import React, {Component} from 'react';
import {CounterManagementProps, CounterManagementState, UserDataAPI} from "./interface";
import axios from "axios";

class CounterManagement extends Component<CounterManagementProps, CounterManagementState> {

    constructor(props: CounterManagementProps) {
        super(props);
        this.state = {
            counter: 0,
            userData: {
                id: 0,
                avatar: '',
                email: '',
                first_name: '',
                last_name: ''
            }
        };
    }

    handleAddClicked = () => {
        this.setState({counter: this.state.counter + 1});
    }

    handleMinusClicked = () => {
        this.setState({counter: this.state.counter - 1});
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        axios.get(`https://reqres.in/api/users/${this.state.counter}`)
            .then(response => {
                const userDataApi = response.data as UserDataAPI;
                this.setState({userData: userDataApi.data});
            })
    }

    componentDidUpdate(prevProps: Readonly<CounterManagementProps>, prevState: Readonly<CounterManagementState>, snapshot?: any) {
            if(prevState.counter !== this.state.counter) this.fetchUserData();
    }

    render() {
        const {ownerName} = this.props;
        return (
            <div>
                <h1>Counter management </h1>
                <h2>Owner Name : {ownerName}</h2>
                <h2>counter : {this.state.counter}</h2>
                <h3>{this.state.userData.first_name}</h3>
                <button onClick={this.handleAddClicked}>Add</button>
                <button onClick={this.handleMinusClicked}>Minus</button>
            </div>
        );
    }
}

export default CounterManagement;