import React from 'react';
import { Grid } from '@material-ui/core';
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";



function Body4() {
    var { keyframes, timing } = zoomIn;
    const { ref: b1 } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations: Infinity,
        delay: 1000, // Delay 1s
        duration: 2000, // Run for 1000ms
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    return (
        <div id= 'body4'>
            <Grid container>
                <Grid item xs={6}>
                    <div style={{ position: "absolute", padding: "75px 0px 0px 150px" }}>
                        
                           <h1 style={{ padding: "0px 0px 0px 150px"}}>   Contact US </h1>
                           

                            <form>
                                <div id= 'form-control'>

                                <label >First Name</label>
                                <input type="text" name="firstname" placeholder="Your name.." required/>
                                <br />

                                
                                <label>Last Name</label>
                                <input type="text" name="lastname" placeholder="Your last name.." required/>
                                <br />

                                <label >State</label>
                                <select name="country" required>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Sindh">Sindh</option>
                                    <option value="KPK">KPK</option>
                                    <option value="Balochistan">Balochistan</option>
                                    <option value="GB">GB</option>

                                </select>
                                <br />

                                <label >Subject</label>
                                <textarea name="subject" placeholder="Write something.."> </textarea>
                                <br />

                                <input type="submit" id="submit" onSubmit={()=>{alert("Thanks for information")}}/>
                                </div>

                            </form>
                    </div>
                </Grid>


                <Grid item xs={6}> 
                
                <div  ref={b1}  style={{ position: "absolute", padding: "210px 0px 0px 450px"}}> 
                <img src='https://images.vexels.com/media/users/3/154623/isolated/preview/ec9ca7f0d84780221389129e7adaccf1-info-speech-bubble-contact-icon-by-vexels.png'
                alt='contact'
                height="100px"
                width="100px"
                /> 
                </div>

                <div style={{ position: "absolute", padding: "180px 0px 0px 100px"}}> 
                <img src='https://www.beevoo.me/img/undraw/contact-us.svg'
                alt='contact'
                height="500px"
                width="500px"
                /> 
                </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default Body4
