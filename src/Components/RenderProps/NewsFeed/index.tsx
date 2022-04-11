import React from 'react';
import {NewsFeedProps, NewsFeedStates} from "./interface";

const NewsFeed: React.FC<NewsFeedProps> = ({clickCount}) => {
    return (
        <div>
            <h1>NewsFeedComponent</h1>
            <h2>Click Count : {clickCount}</h2>
        </div>
    );
};

export default NewsFeed;