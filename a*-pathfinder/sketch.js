function removeFromArray(arr, el) {
  for(let i = arr.length-1; i >= 0; i--) {
    if(arr[i]== el) arr.splice(i, 1);
  }
}

function heuristic(a,b) {
  return abs(a.i - b.i) + abs(a.j - b.j);
  // return dist(a.i, a.j, b.i, b.j);
}

const cols = 25;
const rows = 25;
let grid = new Array(cols);
let openSet = [];
let closedSet = [];
let start;
let end;
let w, h;
let current;
let noSolution = false;

function setup() {
  createCanvas(400, 400);

  w = width / cols;
  h = height / rows;

  // Making a 2D array
  for(let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  };

  // Populating de Array
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    };
  };

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    };
  };

  start = grid[0][0];
  end = grid[rows-1][cols-1];
  start.wall = false;
  end.wall = false;

  openSet.push(start);
  console.log(grid);
};

function draw() {
  if(openSet.length>0) {
    // we can keep going
    let winner = 0;
    openSet.map((node, i) => {
      if(openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    });
    current = openSet[winner];

    if(current === end) {
      noLoop();
      console.log("DONE!");
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    const {neighbors} = current; 
    neighbors.map(neighbor => {
      if(!closedSet.includes(neighbor) && !neighbor.wall) {
        let tempG = current.g + 1;
        if(openSet.includes(neighbor)) {
          if(tempG < neighbor.g) {
            neighbor.g = tempG;
          }
        } else {
          neighbor.g = tempG;
          openSet.push(neighbor);
        }
        neighbor.h = heuristic(neighbor, end);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.previous = current;
      }
    })
  } else {
    console.log('no solution');
    noSolution = false;
    noLoop();
  }


  background(0);

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    };
  };

  closedSet.map(spot => {
    spot.show(color(255, 0, 0));
  });

  openSet.map(spot => {
    spot.show(color(0, 255, 0));
  });

  let path = [];
  //find the path
  if(!noSolution) {
    let temp = current;
    path.push(temp);
    while(temp.previous) {
      path.push(temp.previous);
      temp = temp.previous;
    }
  }

  path.map(spot => {
    spot.show(color(0,0,255));
  });
};