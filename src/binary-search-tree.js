const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
/*
class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}
*/

class BinarySearchTree {

  constructor() {    this.first = null;}
  root() {
   return this.first; 
  }

  add( data ) {
   // throw new NotImplementedError('Not implemented');
    let newNode = new Node(data);
    if (this.first === null) {
        this.first = newNode;
    } else {
        this.insertNode(this.first, newNode); // helper method below
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}

has(data) {
  if (this.first === null) return false;
  return  this.compare(data, this.first);
}

compare(data, node) {
  if(data === node.data) return true;
  if(data < node.data) 
    if (node.left === null) return false; 
      else
        return this.compare(data, node.left);
  if(data > node.data) 
    if (node.right === null) return false; else
        return this.compare(data, node.right);
}

find(data) {
  if (this.first === null) return null;
  return  this.search(data, this.first);
}

search(data, node) {
  if(data === node.data) return node;
  if(data < node.data) 
    if (node.left === null) return null; 
      else
        return this.search(data, node.left);
  if(data > node.data) 
    if (node.right === null) return null; else
        return this.search(data, node.right);
}


remove(data) {
  if (this.first === null) return null;
  this.first = this.removeNode(this.first, data); 
}

removeNode(node, data) {
  if (node === null) {      return null;  } 
    else if (data < node.data) {  // удаляемое значение меньше значения узла, может измениться ссылка на левый край
      node.left = this.removeNode(node.left, data);
      return node;
    } 
    else if (data > node.data) {  // удаляемое значение больше значения узла, может измениться ссылка на правый край
      node.right = this.removeNode(node.right, data);
      return node;
  } 
  else {  // данные равны
      if (node.left === null && node.right === null) {
          node = null;
          return node;
      }
      if (node.left === null) {  node = node.right;       return node;      } 
      else if(node.right === null) { node = node.left;    return node;      }
      
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newNode = this.min_node(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
  }
}

  min_node(node) {
    if (node.left === null) return node;
    return this.min_node(node.left);
  }
  max_node(node) {
    if (node.right === null) return node;
    return this.max_node(node.right);
  }
  
    min() {
          if (this.first === null) return null;
          return this.min_node(this.first).data;
    }
  
    max() {
      if (this.first === null) return null;
      return this.max_node(this.first).data;
  }

  
}

module.exports = {
  BinarySearchTree
};