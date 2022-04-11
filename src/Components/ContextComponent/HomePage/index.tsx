import React from 'react';
import UserInput from "../UserInput";
import {MyContext} from "../../../Context/MyContext";


class HomePage extends React.Component {
    // static contextType = MyContext;
    // context!: React.ContextType<typeof MyContext>

    updateUsers = (contextUpdateUserFn: (users: string[]) => void) => () => {
        contextUpdateUserFn(['Pisipini', 'Bella']);
    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    data => (
                        <div>
                            <h1>Home page</h1>
                            <ul>
                                {data.users.map(user => <li>{user}</li>)}
                            </ul>
                            <button onClick={this.updateUsers(data.updateUsers)}>Update Users</button>
                            <UserInput/>
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}

export default HomePage;