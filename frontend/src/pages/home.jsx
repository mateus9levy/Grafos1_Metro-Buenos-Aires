import BFS from "../scripts/bfs";

import { useEffect } from "react";
import { element } from "prop-types";



const Home =  () => {


        const result = BFS(0,36);
        console.log(result)

    return(

        <div className="App">
            <h1>Hello World</h1>
        </div>    
        
        
    );

}



export default Home