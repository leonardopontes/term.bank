class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      this.vertices[vertex] = [];
    }
  
    addEdge(source, destination) {
      this.vertices[source].push(destination);
      this.vertices[destination].push(source);
    }
  }
  
  // Criando um grafo
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  
  // Visualizando o grafo
  console.log(graph);  