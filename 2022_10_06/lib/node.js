class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  hasChildren(){
    return this.left || this.right;
  }
}

export default Node;