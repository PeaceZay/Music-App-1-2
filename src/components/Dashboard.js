import React, { useState, useEffect } from 'react';
import Onlinecard from "./OnlineCard";
import MasterVol from "./MasterVol";
import SQC from "./SQC";

function Dashboard(props) {
const [notifications, setNotifications] = useState([]);
const [online, setOnline] = useState(true);
const [volume, setVolume] = useState(20);
const [quality, setQuality] = useState(0);

useEffect(() => {
    if (!online) {
        notifications.push("Your application is offline. You won't be able to share or stream music to other devices.")
    } 
    
    if (volume > 80 ) {
        notifications.push("Listening to music at a high volume could cause long-term hearing loss")
        console.log("inside Useeffect")
    }
    
    if (quality == 1){
        notifications.push("Music quality is degraded. Increase quality if your connection allows it.")
    }
},  [notifications, volume, quality, online]); 



const {userName} = props;
        
    return(
        <div>
                <h1 style={{marginLeft: "8%", color: "grey"}}>Welcome {userName}</h1>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <Onlinecard  online={online} setOnline= {setOnline}/>
                    <MasterVol volume={volume} setVolume={setVolume} />
                    <SQC quality={quality} setQuality={setQuality}  />
                </div>
                <h1 style={{marginLeft: "8%"}}>System Notifications:</h1>
                <p> 
                    {notifications}
                </p>
        </div>
    )
    
};



export default Dashboard; 