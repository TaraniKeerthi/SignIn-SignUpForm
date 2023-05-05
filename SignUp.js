import React from 'react'
import {Avatar, Button, Grid,TextField,FormGroup,FormControlLabel,Checkbox, Container, Typography} from '@mui/material'

//Signup function
function SignUp(){

    //function when button is clicked
    let handleSubmit=() => {
        let nameEl = document.getElementById("name").value
        let mailEl = document.getElementById("email").value
        let phoneEl = document.getElementById("phone").value
        let passwordEl = document.getElementById("password").value
        localStorage.setItem("name",nameEl);
        localStorage.setItem("email",mailEl);
        localStorage.setItem("phone",phoneEl);
        localStorage.setItem("password",passwordEl);
        alert("Congratulations! You have signed up. Kindly login to your account");
    }

    //returning output
    return(
        <Container  sx={{padding:"20px 20px",width:300,margin:"1px auto"}}>
                <Grid align="center">
                    <Avatar sx={{width:150,height:150}}>    
                        <img src="Sunray.png" alt="sunraylogo" />
                    </Avatar>
                    <Typography sx={{m:2}}>SIGN UP</Typography>
                    <p>Thank you for choosing Sunray!!!</p>
                </Grid>
                <form>
                    <TextField id="name" label="Name" required fullWidth sx={{mb:2}}/>
                    <TextField id="email" label="Email" required fullWidth sx={{mb:2}}/>
                    <TextField id="phone" label="Phone" required fullWidth sx={{mb:2}}/>
                    <TextField id="password" label="Password" required fullWidth sx={{mb:1}}/>
                    <FormGroup>
                        <FormControlLabel sx={{mb:1}} control={<Checkbox />} label="I agree to the terms and conditions" />
                    </FormGroup>
                    <Button variant="contained" fullWidth onClick={handleSubmit}>SIGN UP</Button>
                </form>
        </Container>
    );
}

export default SignUp;