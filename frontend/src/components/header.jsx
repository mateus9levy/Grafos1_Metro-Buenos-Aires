import "../index.css"
import logo from "../assets/images/Subte-logo.png"
import Graphs from "../__db__/stations"
import { Button, Grid, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import BFS from "../scripts/bfs"
import { useHeaderData } from "../context/HeaderContext"

const Header = () => {
    const { headerData, setHeaderData } = useHeaderData();
    const [start,setStart] = useState(-1)
    const [end,setEnd] = useState(-1)

    const handleChangeStart = (event) => {
        setStart(event.target.value);
      };

    const handleChangeEnd = (event) => {
        setEnd(event.target.value)
    }

    const result = (start,end)=>{
        if(start == -1  || end == -1){
            alert("Escolha As Estações")
        }
        else if(start == end){
            alert("As Estações são iguais!")
        }
        else{
            const path = BFS(start,end)
            setHeaderData({ ...headerData, message: `${path}` });
            return path
        }
    }
    
    return(
        <div className="navbar">
            <img 
                width={100}
                src={logo} 
                alt="logo"/> 
            <Grid item container  justifyContent="center">
                <Grid item container marginLeft={10}>
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
                <Grid container item xs={6} sm={3} >
                    <Button 
                        variant="contained"
                        color='primary' onClick={()=>{
                        result(start,end)
                        }}>
                        Buscar
                    </Button>
                </Grid>
        </div>
    )
}



export default Header