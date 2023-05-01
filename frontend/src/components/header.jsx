import "../index.css"
import logo from "../assets/images/Subte-logo.png"
import { Box, Grid, MenuItem, Select } from "@mui/material"

const Header = (options) => {

    return(
        <div className="navbar">
            <img 
                    width={100}
                    src={logo} 
                    alt="logo"/> 
                <Grid item container  justifyContent="center">
                    
                    <Grid item xs={12} sm={3}>
                        <h5>Escolha o seu ponto de Partida:</h5>
                        <Select className="start-point">
                            <MenuItem value={12}></MenuItem>
                        </Select>   
                    </Grid>
                <Grid item xs={12} sm={3}>
                    <h5>Escolha o seu Destino:</h5>
                    <Select className="end-point">
                        <MenuItem value={12}>{}</MenuItem>
                    </Select>
                </Grid>
             
                </Grid>        
            
            
        </div>
        
    )




}



export default Header