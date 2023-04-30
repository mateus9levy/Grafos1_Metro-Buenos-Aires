
const  BFS = (start, end, graphs)=> {

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
      for (let i = 0; i < graphs[node].list_neighbor.length; i++) {
        let neighbor = graphs[node].list_neighbor[i];
        let new_path = [...path, neighbor]; // Cria um novo caminho com o vizinho
        
        // Verifica se o vizinho é o nó final
        if (neighbor === end) {
          return new_path;
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


export default BFS