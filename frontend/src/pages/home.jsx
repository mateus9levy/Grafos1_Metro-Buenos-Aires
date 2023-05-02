
import mapImage from    "../assets/images/map.png"
import { useHeaderData } from "../context/HeaderContext";
import { Grid } from "@mui/material";
const Home =  () => {
    const {headerData} = useHeaderData()
    const message = headerData.message
    return(
    
    <>
        <Grid item container justifyContent={"center"}>
            <Grid item > 
                <h3>
                    {`Caminho: ${message}`}
                </h3>
            </Grid>
            <img
                width={1100}
                src={mapImage}
            > 
            </img> 
        </Grid>
    </>   
    );

}



export default Home