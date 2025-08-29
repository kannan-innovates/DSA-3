class Graph {
     constructor() {
          this.adjList = {};
     }
     addVertex(vertex) {
          if (!this.adjList[vertex]) {
               this.adjList[vertex] = [];
          }
     }
     addEdges(v1, v2) {
          if (!this.adjList[v1]) this.addVertex(v1);
          if (!this.adjList[v2]) this.addVertex(v2);

          this.adjList[v1].push(v2);
          this.adjList[v2].push(v1);
     }
     //recursive
     dfs(start, visited = new Set()) {
          visited.add(start);
          console.log(start);

          for (let neighbor of this.adjList[start]) {
               if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    this.dfs(neighbor, visited)
               }
          }
     }
     //using stack 
     DFSIterative(start){
          let stack = [start];
          let visited = new Set();
          visited.add(start);

          while (stack.length > 0){
               let vertex = stack.pop();
               console.log(vertex);

               for ( let neighbor of this.adjList[vertex]){
                    if (!visited.has(neighbor)){
                         stack.push(neighbor);
                         visited.add(neighbor);
                    }
               }
          }
     }

}
let g = new Graph();
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("B", "E");
g.addEdges("C", "F");

// g.dfs("A");
g.DFSIterative("A")