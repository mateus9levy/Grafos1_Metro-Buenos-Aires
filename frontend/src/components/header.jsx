import "../index.css"
import logo from "../assets/images/Subte-logo.png"
import Graphs from "../__db__/stations"
import { Grid, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const Header = () => {


    const [start,setStart] = useState(-1)
    const [end,setEnd] = useState(-1    )
    // console.log(start)
    console.log(start)
    const handleChangeStart = (event) => {
        setStart(event.target.value);
      };


    const handleChangeEnd = (event) => {
        setEnd(event.target.value)
    }



    return(

        <div className="navbar">
            <img 
                    width={100}
                    src={logo} 
                    alt="logo"/> 
                <Grid item container  justifyContent="center">
                   
                    <Grid item container marginLeft={20}>
                    <Grid item xs={12} sm={6}>
                        <h5>Escolha o seu ponto de Partida:</h5>
                        <Select 
                            onChange={handleChangeStart} 
                            value={start} 
                            className="start-point">
                            {Graphs.map((item)=>     
                             <MenuItem key={parseInt(item.id)} value={parseInt(item.id)}>{item.name}</MenuItem>
                            )}
                        </Select>   
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <h5>Escolha o seu Destino:</h5>
                    <Select 
                            onChange={handleChangeEnd} 
                            value={end} 
                            className="start-point">
                            {Graphs.map((item)=>     
                             <MenuItem key={parseInt(item.id)} value={parseInt(item.id)}>{item.name}</MenuItem>
                            )}
                        </Select>   
                    </Grid>

                    </Grid>
                   
             
                </Grid>        
            
            
        </div>
        
    )




}



export default Header