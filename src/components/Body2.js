import { Grid } from '@material-ui/core';
import React from 'react';



function Body2() {

    return (
        <div id = 'body2'>
            <Grid container> 

            <Grid item xs={8} style = {{ fontWeight: "2rem", fontFamily: "arial", alignContent: "center", fontSize: "2rem"}}> 
            <div style={{padding: "200px 0px 0px 100px"}}> 
                WE ARE PAKISTAN'S BIGGEST BOOK DONATION AGENCY
            </div>
            <div style={{padding: "10px 0px 0px 100px"}}> 
                WE CONNECT BOOKS TO PEOPLE SO THEY SPEND LESS TIME ON YOUR SHELVES
            </div>
            <div style={{padding: "10px 0px 0px 100px"}}> 
                OUR MISSION IS TO MAKE BOOKS AVAILABLE IN EVERY HOUSE OF PAKISTAN
            </div>
            </Grid>
            <Grid item xs={4}> 
            <div style={{padding: "200px 0px 0px 0px"}}> 
                <img 
                src='https://images.vexels.com/media/users/3/144860/isolated/preview/5128b7ff4b40f49cd6c0ce8698b9a19a-boy-reading-books-illustration-by-vexels.png' 
                alt='img'
                height="400px"
                width="400px" />
            </div>
            </Grid>

            </Grid>
        </div>
    )
}

export default Body2
