import React from "react"
import { Tabs, Tab,Paper,Typography,Box} from "@mui/material"
import SignUp from "./SignUp"
import SignIn from "./login"

function Holder() {
    //react use state hook for displaying the selected tab
    const [value, setValue] = React.useState(0);
    const handleChange = (_event, newValue) => {
      setValue(newValue);
    }
    
    //code for tab panel function 
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
    
    //rendering tabs and tab panels 
    return(
        <Paper elevation={20} sx={{padding:"20px",width:500,margin:"50px auto"}}>
          <Tabs centered value={value} onChange={handleChange}  aria-label="switching tabs">
            <Tab label="SIGN UP" />
            <Tab label="LOGIN" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <SignUp/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignIn />
          </TabPanel>
        </Paper>  
    )
}
 
export default Holder;

