import React from 'react';
import {ProfileProps} from "./interface";

const Profile:React.FC<ProfileProps> = ({clickCount}) => {
    return (
        <div>
            <h1>Profile Component</h1>
            <h2>Click Count : {clickCount}</h2>
        </div>
    );
};

export default Profile;