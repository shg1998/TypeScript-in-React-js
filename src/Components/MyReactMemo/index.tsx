import React from 'react';
import {MyReactMemoProps} from "./interface";

const MyReactMemo:React.FC<MyReactMemoProps> = ({name,address}) => {
    console.log("myReact memo render")
    return (
        <div>
            <h2>Name : {name}</h2>
            <h3>City: {address.city}</h3>
            <h3>State: {address.state}</h3>
        </div>
    );
};

export default React.memo<MyReactMemoProps>(MyReactMemo,(prevProps ,nextProps)=>{
return prevProps.name === nextProps.name && prevProps.address.state === nextProps.address.state && prevProps.address.city === nextProps.address.city;
}); // shallow props checking