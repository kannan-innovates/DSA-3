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
}
let g = new Graph();
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("B", "E");
g.addEdges("C", "F");

g.dfs("A");