import BFS from "../scripts/bfs";
import mapImage from    "../assets/images/map.png"
import Header from "../components/header"


const Home =  () => {


        const result = BFS(33,42);
        if(!result){
            console.log("nao encontrado")
        }
    return(
    

    <>
    <Header/>
    <img 
            width={1000}
            src={mapImage}
            alt="map" />
    </>
           
            
            



        


        
        
        
    );

}



export default Home