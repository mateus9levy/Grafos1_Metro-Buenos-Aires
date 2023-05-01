
import mapImage from    "../assets/images/map.png"
import { useContext } from "react";
import { useHeaderData } from "../context/HeaderContext";
import { Grid } from "@mui/material";
const Home =  () => {
    const {headerData} = useHeaderData()
    const message = headerData.message
    return(
    
    <>
        <Grid item container>
        <h3>
            {message}
        </h3>
        <Grid item marginY={10}>
        <img 
            width={1000}
            src={mapImage}
        > 
        </img> 
        </Grid>
        

        </Grid>
        


    </>
       
        
    
        


        


        
        
        
    );

}



export default Home