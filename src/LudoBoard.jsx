import {useState} from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        console.log(moves.blue);
        setArr((prevArr)=>{
            return [...prevArr, "blue move"];
        })
        console.log(arr);
        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue+1}
    })
    };
    let updateRed = () => {
        console.log(moves.red);
        setArr((prevArr)=>{
            return [...prevArr, "red move"];
        })
        console.log(arr);
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red+1}
    })
    };
    let updateYellow = () => {
        console.log(moves.yellow);
        setArr((prevArr)=>{
            return [...prevArr, "yellow move"];
        })
        console.log(arr);
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow+1}
    })
    };
    let updateGreen = () => {
        console.log(moves.green);
        setArr((prevArr)=>{
            return [...prevArr, "greeen move"];
        })
        console.log(arr);
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green+1}
    });
}
    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            </div>
            <div className="board">
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            </div>
            <div className="board">
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
            </div>
            <div className="board">
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}