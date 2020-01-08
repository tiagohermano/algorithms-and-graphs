function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;

  if(random(0,1) < 0.3) this.wall = true;

  this.show = function(color) {
    fill(color);
    if(this.wall) fill(0);
    noStroke(0);
    rect(this.i*w, this.j*h, w-1, h-1);
  }

  // Figure out who my neighbors are
  this.addNeighbors = function(grid) {
    let { i , j } = this;
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
  };
}

