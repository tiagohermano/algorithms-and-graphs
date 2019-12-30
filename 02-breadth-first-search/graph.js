function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}

Graph.prototype.setStart = function(actor) {
  this.start = this.graph[actor];
}

Graph.prototype.setEnd = function(actor) {
  this.end = this.graph[actor]
}

Graph.prototype.addNode = function(n) {
  this.nodes.push(n);
  const title = n.value;
  this.graph[title] = n;
}

Graph.prototype.getNode = function(actor) {
  return this.graph[actor];
}