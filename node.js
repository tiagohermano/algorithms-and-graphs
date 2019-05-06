function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  } 
  console.log(this.value);
  if (this.right != null) {
    this.right.visit();
  }
}

Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if(this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if(this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
}