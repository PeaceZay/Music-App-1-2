import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SQC(props) {
  const {quality, setQuality} = props

  const onQualityChange = (e) => {
    setQuality(e.target.value);
    console.log(quality)
  }
        
    return(
        <Card sx={{ minWidth: 275,  margin: "5%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
            Sound Quality
          </Typography>
          
          <Typography sx={{ mb: 1.5 }} color="black">
            Manually control the music quality in event of poor connection
          </Typography>


        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={onQualityChange}
          value={quality}
        >
          <MenuItem value={0}>none</MenuItem>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal </MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>



        </CardContent>

      </Card>

    )
    
};



export default SQC; 