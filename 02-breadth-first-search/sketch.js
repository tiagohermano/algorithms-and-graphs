let data;
let graph;

function preload() {
  data = loadJSON('kevinbacon.json');
}

function setup() {
  graph = new Graph();
  noCanvas();
  console.log(data);
  const { movies } = data;

  movies.map(movie => {
    const movieNode = new Node(movie.title);
    graph.addNode(movieNode);
    
    movie.cast.map(actor => {
      let actorNode = graph.getNode(actor);
      if(!actorNode) actorNode = new Node(actor);
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    })
  });

  graph.setStart("Julia Roberts");
  graph.setEnd("Kevin Bacon");

  console.log(graph);
}