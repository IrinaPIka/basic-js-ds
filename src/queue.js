const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() { this.endNode = null; this.firstNode=null; }

  getUnderlyingList() {
    return this.firstNode;
  }

  enqueue(value) {
    let newNode=new ListNode(value); //новый элементт

    if(this.firstNode==null) 
    { this.firstNode=newNode; 
      this.endNode=this.firstNode;
    }
    else  // элемент не первый
    {
      this.endNode.next=newNode;  // последнему элементу присвоили ссылку на текуший конец 
      //console.log('value:',value, 'new:',newNode) ;  
      //console.log('first:',this.firstNode, '------') ;  
      this.endNode=newNode;  // добавили в конец новый элемент
    }
    
  }

  dequeue() {
    if(this.firstNode==null) return null; // удалять нечего, лчередб пуста
    let res= this.firstNode.value; // нам надо вернуть значение первого элемента
    if(this.firstNode.next == null)   // в очереди был один элемент и мы его удаляем
      this.firstNode=null
      else 
      this.firstNode=this.firstNode.next;
    return res;
  }
}


module.exports = {
  Queue
};

