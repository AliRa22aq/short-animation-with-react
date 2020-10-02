import React from 'react'
import { Grid } from '@material-ui/core';
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";


function Body3() {

    var { keyframes, timing } = pulse;
    const { ref: b1 } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 3000, // Delay 1s
        iterations: Infinity,

      },
    });

    return (
        <div id= 'body3'>
        <Grid container> 
        <Grid item xs={8}>

            <div style={{position: "absolute", padding: "100px 0px 0px 150px"}}> 
            <img src='https://freesvg.org/img/Pakistan-Flag-Map.png'
            alt="map"
            height="500px"
            width="500px"
            z-index= "1"

            />
        </div>

        <div ref={b1} > 
            <div style={{position: "absolute", padding: "250px 0px 0px 500px"}}> 
                <img 
                title= "Lahore"
                src='https://cdn.iconscout.com/icon/free/png-256/location-62-93995.png'
                alt= 'map'
                height = '30px'
                width = '30px'
                z-index= "2"          
                />
                </div>

                <div style={{position: "absolute", padding: "400px 0px 0px 250px"}}> 
                <img 
                title= "Quetta"
                src='https://cdn.iconscout.com/icon/free/png-256/location-62-93995.png'
                alt= 'map'
                height = '30px'
                width = '30px'
                z-index= "2"
                />
                </div>

                <div style={{position: "absolute", padding: "500px 0px 0px 350px"}}> 
                <img 
                title= "Karachi"
                src='https://cdn.iconscout.com/icon/free/png-256/location-62-93995.png'
                alt= 'map'
                height = '30px'
                width = '30px'
                z-index= "2"
                />
                </div>

                <div style={{position: "absolute", padding: "150px 0px 0px 490px"}}> 
                <img 
                title= "Gilgit"
                src='https://cdn.iconscout.com/icon/free/png-256/location-62-93995.png'
                alt= 'map'
                height = '30px'
                width = '30px'
                z-index= "2"
                />
                </div>

                <div style={{position: "absolute", padding: "380px 0px 0px 400px"}}> 
                <img 
                title= "Multan"
                src='https://cdn.iconscout.com/icon/free/png-256/location-62-93995.png'
                alt= 'map'
                height = '30px'
                width = '30px'
                z-index= "2"
                />
                </div>

            </div>
        
        </Grid>
        
        <Grid item xs={4}>
        <div style={{color:"red", fontWeight: "2rem", fontFamily: "arial", alignContent: "center", fontSize: "2.5rem", padding: "100px 0px 0px 0px"}}> 
                WORKING IN ALL MAJOR CITIES OF PAKISTAN
            </div> 
            <div style={{padding: "80px 0px 0px 100px"}}> 
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
