var tree;
function setup() {
  noCanvas();
  tree = new Tree();
  for(var i=0; i<10; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  tree.traverse();

  const result = tree.search(22);
  if(result!=null) {
    console.log('found');
    console.log(result);
  } else {
    console.log('not found');
  }
}