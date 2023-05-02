import Graphs from "../__db__/stations";

const  BFS = (start, end)=> {

  let visited = new Set();    // Conjunto de nós visitados
  let queue = [[start]];      // Fila de nós a serem visitados
  
  // Verifica se o nó inicial e final são iguais
  if (start === end) {
    return [start];
  }
  
  while (queue.length > 0) {
    let path = queue.shift(); // Remove o primeiro caminho da fila
    let node = path[path.length - 1]; // Pega o último nó do caminho
    
    // Verifica se o nó já foi visitado
    if (!visited.has(node)) {
      // Percorre todos os vizinhos do nó atual
      for (let i = 0; i < Graphs[node].list_neighbor.length; i++) {
        let neighbor = Graphs[node].list_neighbor[i];
        let new_path = [...path, neighbor]; // Cria um novo caminho com o vizinho
        
        // Verifica se o vizinho é o nó final
        if (neighbor === end) {
          const path = result(new_path);
          const message = getPath(path)
          return message;
        } else {
          queue.push(new_path); // Adiciona o novo caminho na fila
        }
      }
      
      visited.add(node); // Marca o nó como visitado
    }
  }
  
  // Caso não seja possível encontrar um caminho
  return null;
}
const result = (new_path)=> {

  const path = [];
  new_path.map((item)=>{
    Graphs.map((itenzin)=>{
          if(item == parseInt(itenzin.id)){
              const element = {
                  id: itenzin.id,
                  name: itenzin.name,
                  line: itenzin.line,
                  color: itenzin.color,
              }
             
              path.push(element)
          }
      })
      
      
  })
 return path  

}


const getPath = (path) =>{
  let initalLine = path[0].line
  let message = `Comece em ${path[0].name} na Linha ${path[0].line}` 
 
  path.map((element,id)=> {
    if(element.line != initalLine){
      initalLine = element.line
      message = message + ` ande até a Estação ${path[id-1].name} e continue na
                            linha "${element.line}" e siga em direção a estação ${element.name}, `

    }
    
  })
  message = message + `desça em ${path[path.length-1].name}`
  
   

  return message

}

export default BFS