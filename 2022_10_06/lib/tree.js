import Node from "../lib/node.js";

class Tree{
  constructor(data, array){
    this.root = new Node(data);
    this.array = array;
    array.map(element => this.insert(element));
  }
  

  insert(int, node = this.root){
    if(int > node.data){
      if(node.right == undefined){
        let newNode = new Node(int);
        node.right = newNode;
        this.array.push(int);
      }else{
        this.insert(int, node.right)
      }
    }else{
      if(node.left == undefined){
        let newNode = new Node(int);
        node.left = newNode;
        this.array.push(int);
      }else{
        this.insert(int, node.left)
      }
    }
  }
    
  find(int, node = this.root){
    if(node.data == int){
      return node;
    }else{
      if(int > node.data){
        if(node.right == undefined){
          return 'no such node';
        }else{
          return this.find(int, node.right);
        }
      }else{
        if(node.left == undefined){
          return 'no such node';
        }else{
          return this.find(int, node.left);
        }
      }
    }
  }

  sum(node = this.root, result = 0){
    if(!node.hasChildren()){
      return result += node.data;
    }else if(node.left && node.right){
      return node.data + this.sum(node.left, result) + this.sum(node.right, result);
    }else if(node.left){
      return node.data + this.sum(node.left, result);
    }else{
      return node.data + this.sum(node.right, result);
    }
  }
}

export default Tree;
let firstNode = 4;
let ary = [2,3,5,1,8,9]
let tree = new Tree(firstNode, ary);
// console.log(tree)
// console.log(tree.root)
console.log(tree.find(5));
console.log(tree.sum());
console.log(firstNode + ary.reduce((total,current) => total + current));
console.log(tree.show());