import { Button, Grid } from '@material-ui/core';
import React from 'react';
import '../App.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import useWebAnimations, { backInDown} from "@wellyshen/use-web-animations";



function Header() {

    var { keyframes, timing } = backInDown;
    const { ref: b1 } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 4000, // Delay 1s

      },
    });
  



    return (
        <div id= "header" >
        <StickyHeader
        // This is the sticky part of the header.
                header={

                    <div  ref={b1} style={{height: "15vh", display: "flex", alignItems: "center"}}>

                    <Grid container style = {{color: "white"}} > 
                    <Grid item xs={2} style = {{alignSelf:"center", paddingLeft:"30px", fontWeight:"2.75rem", alignContent: "center",  fontSize: "1.5rem"}}> 
                    <a href="#header"> BOOKS.PK </a> 
                    </Grid>
                    <Grid item xs={6}> </Grid>
                    <Grid item xs={1} > <Button > <a href="#header"> HOME </a> </Button> </Grid> 
                    <Grid item xs={1} > <Button > <a href="#body2"> ABOUT </a> </Button> </Grid> 
                    <Grid item xs={1} > <Button > <a href="#body3"> DICOVER </a> </Button> </Grid> 
                    <Grid item xs={1} > <Button > <a href="#body4"> CONTACT </a> </Button> </Grid> 
                    
                    </Grid>
                    </div>
                }/>
                </div>
        

    )
}

export default Header

