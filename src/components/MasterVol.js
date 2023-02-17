import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


function MasterVol(props) {
const {volume, setVolume} = props

const onVolumeChange = (e) => {
  setVolume(e.target.value);
  console.log(volume)
}
        
    return(
        <Card sx={{ minWidth: 275,  margin: "5%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
            Master Volume
          </Typography>
          
          <Typography sx={{ mb: 1.5 }} color="black">
            Overrides all the other sound settings in the application
          </Typography>
          <Slider
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={onVolumeChange}
      />
        </CardContent>

      </Card>

    )
    
};



export default MasterVol; 