function Tree() {
  this.root = null;
}

Tree.prototype.search = function(val) {
  const found = this.root.search(val);
  return found;
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if(this.root==null) {
    this.root = n;
    return;
  }
  this.root.addNode(n);
}

Tree.prototype.traverse = function() {
  this.root.visit();
}