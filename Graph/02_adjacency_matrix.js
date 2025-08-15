class GraphMatrix {
    constructor(vertices) {
        this.vertices = vertices;
        this.matrix = [];

        // Initialize NxN matrix with 0
        for (let i = 0; i < vertices.length; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < vertices.length; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    addEdge(v1, v2) {
        const i = this.vertices.indexOf(v1);
        const j = this.vertices.indexOf(v2);

        // Since undirected, set both [i][j] and [j][i] to 1
        this.matrix[i][j] = 1;
        this.matrix[j][i] = 1;
    }

    display() {
        console.log("  " + this.vertices.join(" "));
        for (let i = 0; i < this.vertices.length; i++) {
            console.log(this.vertices[i] + " " + this.matrix[i].join(" "));
        }
    }
}

const vertices = ["A", "B", "C"];
const g = new GraphMatrix(vertices);

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("A", "C");

g.display();