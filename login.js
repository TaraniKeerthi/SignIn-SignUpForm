import React from 'react'
import {Grid,Container,Avatar,TextField,FormGroup,FormControlLabel,Checkbox,Button,Link, Typography} from "@mui/material"
 
//SignIn function
function SignIn(){
  
  //Onlcick function
  const preventDefault = (event) => { 
    event.preventDefault()
  };
   
    return(
        <Container sx={{padding:"20px 20px",width:300,margin:"1px auto"}}>
            <Grid align="center" sx={{mb:2}}>
                <Avatar sx={{width:150,height:150}}>    
                    <img src="Sunray.png" alt="sunraylogo" />
                </Avatar>
                <Typography sx={{m:2}}>LOGIN</Typography>
            </Grid>
            <TextField id="name" label="Username" fullWidth required sx={{mb:2}}/>
            <TextField id="email" label="Password" type="password" required fullWidth sx={{mb:2}}/>
            <FormGroup>
                <FormControlLabel sx={{mb:1}} control={<Checkbox />} label="Remember Me" />
            </FormGroup>
            <Button variant="contained" sx={{margin:"0px 0px 8px 0px"}} fullWidth>LOGIN</Button>
            <Link href="#" onClick={preventDefault}>Forgot Password</Link>
            <Typography>Don't have an account?<Link href= "" onClick={preventDefault}>Sign Up</Link></Typography>
        </Container>
   );
    
}

export default SignIn;