import React from "react";

export interface UserContextType {
    users: string[];

    updateUsers(users: string[]): void;
}

export interface MyContextProviderState {
    users: string[];
}

export const MyContext = React.createContext<UserContextType>(
    {
        users: [], updateUsers(users: string[]) {
        }
    }
);

export class MyContextProvider extends React.Component<{}, MyContextProviderState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            users: ["karim", "Mohammad", "Ali"]
        }
    }

    updateUsers = (users: string[]) => {
        this.setState({users: [...this.state.users, ...users]});
    }

    render() {
        const providerValue:UserContextType = {
            users:this.state.users,
            updateUsers:this.updateUsers
        }

        return (
            <MyContext.Provider value={providerValue}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}