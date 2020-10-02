import React from 'react'
import { Grid } from '@material-ui/core';

function Body3() {
    return (
        <div id= 'body3'>
        <Grid container> 
        <Grid item xs={8}>
        <div style={{padding: "100px 0px 0px 150px"}}> 
            <img src='https://freesvg.org/img/Pakistan-Flag-Map.png'
            alt="map"
            height="500px"
            width="500px"
            />
        </div>
        </Grid>
        
        <Grid item xs={4}>
        <div style={{padding: "150px 0px 0px 0px"}}> 
                WORKING IN ALL MAJOR CITIES OF PAKISTAN
            </div> 
            <div style={{padding: "100px 0px 0px 100px"}}> 
            <img src='https://media.flaticon.com/img/search/empty-search.svg' 
            alt= "img"
            height="300px"
            width="300px"
             />
            </div>
        </Grid>
        </Grid>
        </div>
    )
}

export default Body3
