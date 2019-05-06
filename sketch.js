var tree;

function setup() {
  noCanvas();
  tree = new Tree();

  for (var i=0; i<10; i++) {
    tree.addValue(floor(random(0,100)));
  }
  tree.traverse();
  // console.log(tree);
}

