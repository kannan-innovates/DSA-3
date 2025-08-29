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
     display() {
          for (let neighbor in this.adjList) {
               console.log(`${neighbor} -> ${this.adjList[neighbor]}`)
          }
     }
     hasCycle() {
          let visited = new Set();

          for (let start in this.adjList) {
               if (!visited.has(start)) {
                    let queue = [[start, null]];
                    visited.add(start);

                    while (queue.length > 0) {
                         let [node, parent] = queue.shift();

                         for (let neighbor of this.adjList[node]) {
                              if (!visited.has(neighbor)) {
                                   queue.push([neighbor, node]);
                                   visited.add(neighbor);
                              } else if (neighbor !== parent) {

                                   return true;
                              }
                         }
                    }
               }
          }
          return false;
     }
}

let g = new Graph();
g.addEdges("A", "B");
g.addEdges("B", "C");
g.addEdges("C", "D");

console.log(g.hasCycle()); // false

let g2 = new Graph();
g2.addEdges("A", "B");
g2.addEdges("B", "C");
g2.addEdges("C", "A"); // forms a cycle A-B-C-A
console.log(g2.hasCycle()); // true