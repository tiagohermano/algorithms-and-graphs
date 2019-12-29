function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = null;
  this.y = null;
}

Node.prototype.addNode = function(n) {
  if(n.value < this.value) {
    if(this.left==null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 20;
      return;
    }
    this.left.addNode(n);
    return;
  }
  // if values are equal, do nothing
  if(n.value == this.value) return;

  if(!this.right) {
    this.right = n;
    this.right.x = this.x + 50;
    this.right.y = this.y + 20;
    return;
  }
  this.right.addNode(n);
}

Node.prototype.search = function(val) {
  if(this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function(parent) {
  if(this.left!=null) {
    this.left.visit(this);
  }
  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  stroke(255);
  noFill();
  ellipse(this.x, this.y, 20, 20);
  line(parent.x, parent.y, this.x, this.y);
  text(this.value, this.x, this.y);
  if(this.right!=null) {
    this.right.visit(this);
  }
}