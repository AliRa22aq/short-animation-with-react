import { Grid } from '@material-ui/core';
import '../App.css';
import React from 'react';
import Typing from 'react-typing-animation';

function Body() {
    const AnimatedTypingComponent0 = () => (
        <Typing>
                <Typing.Speed ms={100} />
          <span> Hello Muneeb.</span>
        </Typing>
      );

    const AnimatedTypingComponent = () => (
        <Typing loop={true} startDelay= {3000} >
          <span> I love you.</span>
          <Typing.Backspace count={12} delay={3000}/>
          <span> But I hate you.</span>
          <Typing.Backspace count={16} delay={3000}/>
        </Typing>
      );

    return (
        <div id = 'body'>

        <Grid container>
            <Grid xs = {6}> 
                            {AnimatedTypingComponent0()} {AnimatedTypingComponent()}
            </Grid>
            
            <Grid xs={6}>
            
                <div style={{height: "400px", width: "400px", border: "thick solid #0000FF"}}> Hello </div>
            
            </Grid>



        </Grid>
         </div>
    )
}

export default Body
