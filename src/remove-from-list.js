const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList( l, k) {


  var curNode=l;  // текущий узел 
  var prevNode;   // предыдущий узел, должен указывать на текущий
  var first_node=null;  // первый узел
  
  // до первого значения не равного  k
  while (curNode.value ==k) {
    if(curNode.next==null) return null; // возвращаем пустую цепь
    curNode= curNode.next; 
  }
  // итак, мы пропустили все к в начале
  
  prevNode=curNode;  
  first_node=curNode; // первое  значение не k
  curNode = curNode.next; 
  
  while (curNode.next !=null) {
    if (curNode.value == k) // мы должны пропустить значение
      {
        prevNode.next=curNode.next;
        curNode=curNode.next;
      } 
      else 
      {
      prevNode=curNode;
      curNode=curNode.next;
      }
      }
  if(curNode.value == k)  prevNode.next=null;
  return  first_node; 
  }
  
 
  
module.exports = {
  removeKFromList
};
