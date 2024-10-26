import { useEffect, useState } from "react";
import SinglePlayer from "../assets/singlePlayer/SinglePlayer";

const Playerslist = ({coin,handleSelectedPlayer}) => {
        const[players,setPlayers] = useState([]);
        useEffect(() => {
            fetch('allplayers.json')
            .then(res => res.json())
            .then(data =>{
                setPlayers(data)
            })
        })
        
       
        

    return (
        <div  className='grid grid-cols-3'>
           {
            players.map((player) =><SinglePlayer handleSelectedPlayer={handleSelectedPlayer}  key={player.id} player={player}></SinglePlayer>)
           }
            
        </div>
    );
};

export default Playerslist;