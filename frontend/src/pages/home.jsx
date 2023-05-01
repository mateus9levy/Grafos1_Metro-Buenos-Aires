import BFS from "../scripts/bfs";

import { useEffect } from "react";
import { element } from "prop-types";



const Home =  () => {


        const result = BFS(89,62);
        if(!result){
            console.log("nao encontrado")
        }
    return(

        <div className="App">
            <h1>Hello World</h1>
        </div>    
        
        
    );

}



export default Home