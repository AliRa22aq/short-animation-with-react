import { Button, Grid } from '@material-ui/core';
import React from 'react';
import useWebAnimations, { pulse} from "@wellyshen/use-web-animations";

function Body2() {

    var { keyframes, timing } = pulse;
    const { ref: b2 } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 3000, // Delay 1s
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    return (
        <div id = 'body2'>
            <Grid container> 
            

            <Grid item xs={8} style = {{ color:"white", fontWeight: "2rem", fontFamily: "arial", alignContent: "center", fontSize: "2rem"}}> 
            
            <div style={{padding: "150px 0px 0px 100px"}}> 
              WE ARE PAKISTAN'S BIGGEST BOOK DONATION AGENCY 
            </div>
            
            
            <div style={{padding: "20px 0px 0px 100px"}}> 
               WE CONNECT BOOKS TO PEOPLE SO THEY SPEND LESS TIME ON YOUR SHELVES
            </div>
            
            
            <div style={{padding: "20px 0px 0px 100px"}}> 
             OUR MISSION IS TO MAKE BOOKS AVAILABLE IN EVERY HOUSE OF PAKISTAN 
            </div> 
            <div style={{ color:"red", padding: "100px 0px 0px 570px"}}> 
            <a href="#body3"> 

                <Button style={{ border:"1px", color:"red", fontSize:"1.25rem"}}> LEARN MORE </Button>
            
                </a>
            </div>
           
            </Grid>
            <Grid item xs={4}> 
            <div  style={{position: "absolute", padding: "190px 0px 0px 0px"}}> 
                <img 
                src='https://images.vexels.com/media/users/3/144860/isolated/preview/5128b7ff4b40f49cd6c0ce8698b9a19a-boy-reading-books-illustration-by-vexels.png' 
                alt='img'
                height="350px"
                width="350px" />
            </div>

            <div ref={b2} style={{position: "absolute", padding: "175px 0px 0px 210px"}}> 
                <img 
                src='https://freesvg.org/img/1527134288.png' 
                alt='img'
                height="150px"
                width="100px" />
            </div>
            


            </Grid>

            </Grid>
        </div>
    )
}

export default Body2
