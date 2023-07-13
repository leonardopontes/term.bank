class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
      const childNode = new TreeNode(value);
      this.children.push(childNode);
    }
  }
  
  // Criando uma árvore
  const tree = new TreeNode("A");
  tree.addChild("B");
  tree.addChild("C");
  const nodeD = new TreeNode("D");
  nodeD.addChild("E");
  nodeD.addChild("F");
  tree.addChild(nodeD);
  
  // Visualizando a árvore
  console.log(tree);  