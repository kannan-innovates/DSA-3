class Graph {
     constructor() {
          this.adjList = {}
     }
     addVertex(vertex) {
          if (!this.adjList[vertex]) {
               this.adjList[vertex] = []
          }
     }
     addEdge(v1, v2) {
          if (!this.adjList[v1]) this.addVertex(v1);
          if (!this.adjList[v2]) this.addVertex(v2);

          this.adjList[v1].push(v2);
          this.adjList[v2].push(v1);
     }
     bfs(start) {
          let queue = [start];
          let visited = new Set();
          visited.add(start);

          while (queue.length > 0) {
               let current = queue.shift();
               console.log(current);

               for (let neighbor of this.adjList[current]) {
                    if (!visited.has(neighbor)) {
                         visited.add(neighbor);
                         queue.push(neighbor);
                    }
               }
          }


     }
}

let g = new Graph();

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("B", "E");
g.addEdge("C", "F");

console.log("BFS starting from A");
g.bfs("A")