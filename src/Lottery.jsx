import { useState } from "react";
import { genTicket, sum } from "./helper";
import './Lottery.css'
import Ticket from "./Ticket";

export default function Lottery({n, winningSum}){
    let [ticket, setTicket]=useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return (
        <div className="Lottery">
            <h1>Lottery Game</h1>
            
                <Ticket ticket={ticket}/>
            
            <h3>{isWinning && "Congratulations, you won!"}</h3>
            <button className="lot-button" onClick={buyTicket}>Buy new ticket</button>
        </div>
    )
}