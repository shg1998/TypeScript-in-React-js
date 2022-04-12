import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import CounterManagement from "./Components/CounterManagement";
import MyPureComponent from "./Components/MyPureComponent";
import TrackClick from "./Components/RenderProps/TrackClick";
import Profile from "./Components/RenderProps/Profile";
import NewsFeed from "./Components/RenderProps/NewsFeed";
import {MyContext, MyContextProvider} from "./Context/MyContext";
import HomePage from "./Components/ContextComponent/HomePage";
import { Layout } from './Layout';

function App() {
    return (
        <div className="App">

            <h1>my first fully ts App</h1>
            <Layout/>
            {/*props tutorial :🌹🌹*/}
            {/*<Button type={"primary"}>with primary  props</Button>*/}
            {/*<br/>*/}
            {/*<Button >with no props (default)</Button>*/}

            {/*life cycles and state and props :🌹🌹*/}
            {/*<CounterManagement ownerName={"MohammadHossein"}/>*/}

            {/*    pure component :🌹🌹*/}
            {/*<MyPureComponent />*/}

            {/*    Render props Pattern : */}
            {/*<TrackClick renderProps={(clickCount) => <Profile clickCount={clickCount}/>}/>*/}
            {/*<TrackClick renderProps={(clickCount) => <NewsFeed clickCount={clickCount}/>}/>*/}

            {/* Context Tutorial :  */}
            {/*<MyContextProvider>*/}
            {/*    <HomePage/>*/}
            {/*</MyContextProvider>*/}

        {/*    routing Concept*/}

        </div>
    );
}

export default App;
