import BFS from "../scripts/bfs";
// import Stations from "../db/stations";
import Graphs from "../__db__/stations";



const Home =  (props) => {
    
const result = BFS(17,9,Graphs)
console.log(result)
    return(

        <div className="App">
            <h1>Hello World</h1>
        </div>    
        
        
    );

}



export default Home