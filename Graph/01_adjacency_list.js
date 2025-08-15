class Graph {
     constructor() {
          this.adjList = {}; // stores adjacency list
     }

     addVertex(vertex) {
          if (!this.adjList[vertex]) {
               this.adjList[vertex] = [];
          }
     }

     addEdge(v1, v2) {
          // Undirected graph: add both ways
          if (!this.adjList[v1]) this.addVertex(v1);
          if (!this.adjList[v2]) this.addVertex(v2);

          this.adjList[v1].push(v2);
          this.adjList[v2].push(v1);
     }

     display() {
          for (let vertex in this.adjList) {
               console.log(vertex, "->", this.adjList[vertex].join(", "));
          }
     }
}

// Example usage
const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");

g.display();