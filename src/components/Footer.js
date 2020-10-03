import React from 'react'
import '../App.css';
import { Grid } from '@material-ui/core';
import useWebAnimations, { shakeY} from "@wellyshen/use-web-animations";



function Footer() {

    var { keyframes, timing } = shakeY;
    const { ref: b1 } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });



    return (
        <div  style={{ color: "whitesmoke", backgroundColor: "black", height: "30vh", display: "flex", alignItems: "center"}}>
            <Grid container>

                <Grid item xs={3}> </Grid>
                <Grid item xs={3}> 
                <div style={{display: "flex", fontSize: "1.75rem", paddingTop: "5px"}}>
                    <text> Creater by: Ali Razzaq </text>
                    
                </div>
                </Grid>

                <Grid item xs={1}>
                    <div style={{display: "flex", alignItems: "center"}}>  
                <a href="https://www.facebook.com/AliRa22aQ/"> 
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1200px-Facebook_Home_logo_old.svg.png'
                alt = "top"
                height="50px"
                width= "50px" 
                />
                </a> </div> </Grid>

                <Grid item xs={1}>
                    <div style={{display: "flex", alignItems: "center"}}>  
                <a href="https://www.linkedin.com/in/alirazzaquet" name='LinkedIn'> 
                <img src='https://media2.estateweb.com/contentimage.ewdgx?6562E55DC7948D800704F05636242F42C3C44B38E04198DB14B4BAEC4C6DE476FDEC8C3D7DC6E167400978A43F955973'
                alt = "top"
                height="50px"
                width= "50px" 
                />
                </a> </div> </Grid>

                <Grid item xs={1}>
                    <div style={{display: "flex", alignItems: "center"}}>  
                <a href="https://github.com/AliRa22aq"> 
                <img src='https://www.flaticon.com/svg/static/icons/svg/2111/2111374.svg'
                alt = "top"
                height="50px"
                width= "50px" 
                />
                </a> </div> </Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={1}>
                    <div ref={b1} style={{display: "flex", alignItems: "center"}}>  
                <a href="#header"> 
                <img src='https://lh3.googleusercontent.com/proxy/PRt6U5t88FyaGbj8mRKNdqfK2kFUytOdtihgdWeSu8z-WHbP4DT3slMoBS-V8ufgjQHuIaeDhnINmRKC5S2MG9hvYsAZ9h5XAbOrAdxq51X0fRHMSzdY26rxAtkYNXENYheHypA'
                alt = "top"
                height="60px"
                width= "60px" 
                />
                </a> </div> </Grid>

            </Grid>

           
        </div>
    
    )
}

export default Footer
