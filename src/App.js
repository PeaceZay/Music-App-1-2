import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'


class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: true,
      userName: ""
    }
  };

  handleClick = () => {
    // alert(`${this.state.userName}`)
    this.state.isClicked ? 
      this.setState({loggedIn : true}) : this.setState({loggedIn : false})
  }

  handleInput = (e) => {
    this.setState({
        userName: e.target.value})
  }

  render() {
    return !this.state.loggedIn ? 
    (
      <div>
      <Navbar />
      <br/>
      <Dashboard userName={this.state.userName} />
      </div>
    )
    : (
      

      <div>
        <Navbar/>
        <br/>



      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' , alignItems: 'center', justifyContent: 'center'}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username*" variant="standard"  value={this.state.userName} onChange={this.handleInput} />
      <br/>
      <TextField id="standard-basic" label="Password*" variant="standard" />
    </Box>
    </div>   
    <br/>     
    <Button variant="contained" onClick={(e) => {this.handleClick(e)}} style={{ width: '25ch', display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'auto' }} >Login</Button>


      </div>


)}}

export default App;
