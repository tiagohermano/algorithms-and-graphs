let data;
let graph;
let dropdown;

function preload() {
  data = loadJSON('kevinbacon.json');
}

function setup() {
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(bfs);
  noCanvas();
  console.log(data);
  const { movies } = data;

  movies.map(movie => {
    const movieNode = new Node(movie.title);
    graph.addNode(movieNode);
    
    movie.cast.map(actor => {
      let actorNode = graph.getNode(actor);
      if(!actorNode) {
        actorNode = new Node(actor);
        dropdown.option(actor);
      };
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    });
  });
}

function bfs() {
  graph.reset();
  const start = graph.setStart(dropdown.value());
  const end = graph.setEnd("Kevin Bacon");

  console.log(graph);

  let queue = [];

  start.searched = true;
  queue.push(start);

  while(queue.length) {
    let current = queue.shift();
    if(current == end) {
      console.log("Found " + current.value);
      break;
    }
    const edges = current.edges;
    edges.map(edge => {
      const neighbor = edge;
      if(!neighbor.searched) {
        neighbor.searched = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    });
  }

  const path = [];
  path.push(end);
  let next = end.parent;
  while(next != null) {
    path.push(next);
    next = next.parent;
  }

  let txt = '';
  path.reverse().map((node, i) => {
    txt += ` ${node.value} `;
    if(i!=path.length-1) {
      txt += '-->';
    }
  });
  createP(txt);
}