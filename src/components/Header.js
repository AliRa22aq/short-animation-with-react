import { Button, Grid } from '@material-ui/core';
import React from 'react';
import '../App.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';


function Header() {

    return (
        <div id= "header">
        <StickyHeader
        // This is the sticky part of the header.
                header={

                    <div  style={{height: "15vh", display: "flex", alignItems: "center"}}>

                    <Grid container style = {{color: "white"}} > 
                    <Grid item xs={2} style = {{alignSelf:"center", paddingLeft:"30px", fontWeight:"2.5rem", alignContent: "center",  fontSize: "1.25rem"}}> 
                    <a href="#header"> BOOKLAND </a> 
                    </Grid>
                    <Grid item xs={6}> </Grid>
                    <Grid item xs={1}> <Button > <a href="#header"> HOME </a> </Button> </Grid> 
                    <Grid item xs={1}> <Button > <a href="#body2"> Section1 </a> </Button> </Grid> 
                    <Grid item xs={1}> <Button > <a href="#body3"> Section2 </a> </Button> </Grid> 
                    <Grid item xs={1}> <Button > <a href="#body4"> CONTACT </a> </Button> </Grid> 

                    
                    </Grid>
                    </div>
                }/>
                </div>
        

    )
}

export default Header

