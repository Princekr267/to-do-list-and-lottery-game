import { useState } from "react";

export default function Counter(){
    let [isLiked, setIsLiked]=useState(false);
    let [count, setCount]=useState(0);
    function incCount(){
        setCount((count)=>{
            return count+1;
        })
        setCount((count)=>{
            return count+1;
        })
        setCount((count)=>{
            return count+1;
        })
    }
    function toggleLiked(){
        setIsLiked(!isLiked);
        // setCount(count+1);
    }
    let redHeart = {color: "red"};
    return (
        <div>
           <h3>Count = {count}</h3>
           <button onClick={incCount}>Increase Count</button>
            <p onClick={toggleLiked}>{isLiked ? <i className="fa-solid fa-heart" style={redHeart}></i> : <i className="fa-regular fa-heart"></i>}</p>
        </div>
    );
}