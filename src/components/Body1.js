import { Grid, Button } from '@material-ui/core';
import '../App.css';
import React from 'react';
import Typing from 'react-typing-animation';
import useWebAnimations, { slideInUp, zoomIn, flash } from "@wellyshen/use-web-animations";


function Body1() {

  const { ref: b1 } = useWebAnimations({ ...slideInUp });

  var { keyframes, timing } = zoomIn;
  const { ref: b2 } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: timing.duration * 0.75, // Speed up the animation
    },
  });
  
  var { keyframes, timing } = flash;
  const { ref: b3 } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      iterations: Infinity,
      delay: 5000
      
    },
  });

  const TypingComponent = () => (
    <Typing loop={true} startDelay={2000} >
          <span> ADVENTURE </span>

          <Typing.Backspace count={12} delay={2000}/>
          <span>CLASSICS </span>

          <Typing.Backspace count={10} delay={2000}/>
          <span> MYSTERY </span>


          <Typing.Backspace count={9} delay={2000}/>
          <span>FICTION</span>


          <Typing.Backspace count={9} delay={2000}/>
          <span>RELIGIOUS</span>


          <Typing.Backspace count={10} delay={2000}/>
    </Typing>
  );


  return (
    <div id='body1'>

      <Grid container>
        <Grid item xs={6} >
          <div style={{ fontWeight: "5rem", fontFamily: "arial", alignContent: "center", fontSize: "5rem" }}>
            <div ref={b1}>
              BOOKS WE
          </div>
            <div ref={b2}>
              OFFER
              {TypingComponent()}              
          </div>
          </div>
          

          <div ref={b3} style={{ fontSize: "2rem", padding: "5rem 10rem" }}>
            <Button style={{ fontSize: "2rem"}}> 
            <a href="#body2"> 
            <img
              src='https://icons-for-free.com/iconfiles/png/512/down+arrow+download+icon-1320185738770602413.png'
              alt='down'
              height="30px"
              width="30px" />
              EXPLORE
              </a>    
              </Button>
          
          </div>
          
        </Grid>

                  Picture

        </Grid>
    </div>
  )
}

export default Body1
