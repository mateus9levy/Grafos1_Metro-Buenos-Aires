import BFS from "../scripts/bfs";
import mapImage from    "../assets/images/map.png"
import Header from "../components/header"
import Graphs from "../__db__/stations";


const Home =  () => {


        const result = BFS(33,42);
        if(!result){
            console.log("nao encontrado")
        }
    return(
    

    <>
    <Header options = {Graphs}/>
    <img 
            width={1000}
            src={mapImage}
            alt="map" />
    </>
           
            
            



        


        
        
        
    );

}



export default Home