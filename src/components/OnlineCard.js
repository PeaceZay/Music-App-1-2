import React, { useImperativeHandle, useState} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

function OnlineCard(props) {
// const [online, setOnline] = useState(true);
const {online, setOnline} = props;

const handleOnlineChange = () => {
    setOnline(!online);
    if(online) {
      console.log("you are online!")
    } else {console.log("are are offline")}
}


        
    return(
        <Card sx={{ minWidth: 275, margin: "5%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20}} color="black" gutterBottom>
            Online Mode
          </Typography>
          
          <Typography sx={{ mb: 1.5 }} color="black">
            Is this application connected to the internet?
          </Typography>
          <Switch onClick={handleOnlineChange} style={{color: "red"}} />
        </CardContent>

      </Card>

    )
    
};



export default OnlineCard; 