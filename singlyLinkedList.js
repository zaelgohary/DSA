class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
    } else{
      this.tail.next = newNode
    }
    this.tail = newNode;
    this.length++
    return this;
  }

  pop(){
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current

    while(current.next){
      newTail = current
      current = current.next
    }
    
    this.tail = newTail;
    this.tail.next = null;
    this.length--
    
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(){
    if (!this.head) {
      return undefined
    }
    const removedHead = this.head;
    this.head = this.head.next;
    this.length--

    return removedHead;
  }

  unshift(value){
    const newHead = new Node(value)
    const oldHead = this.head

    if (!this.head) {
      this.head = newHead
      this.tail = newHead
    }

    newHead.next = oldHead;
    this.head = newHead
    this.length++

    return this
  }

  get(idx){
    let current = this.head;

    if (idx < 0 || idx >= this.length) {
      return null
    }

    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        return current;
      } else {
        current = current.next
      }
    }
  }

  set(idx, value){
    let oldNode = this.get(idx);

    if (oldNode){
      oldNode.value = value
      return true;
    }
    return false;
  }

  insert(idx, value){
    const newNode = new Node(value);

    if (idx < 0 || idx > this.length){
      return false
    }
    if (idx === this.length){
      return !!this.push(value)
    }
    if (idx === 0) {
      return !!this.unshift(value)
    }

    const preNode = this.get(idx - 1)
    const afterNode = preNode.next

    if (preNode) {
      preNode.next = newNode;
      newNode.next = afterNode
      this.length++
      return true
    }

    return false
  }

  remove(idx){
    if (idx < 0 || idx > this.length) {
      return undefined
    }

    if (idx === 0) {
      this.shift()
    }

    if(idx === this.length - 1){
      this.pop()
    }

    const preNode = this.get(idx - 1)
    if (preNode) {
      const deletedNode = preNode.next
      preNode.next = deletedNode.next
      this.length--
      return deletedNode
    }
  }

// create 3 pointers 
// prev => null
// current => head
// next => current.next
// set current.next => prev
// update prev to current
// update current to next
// repeat
// when done, assign prev to head

  reverse(){
    if (!this.head) {
      return undefined
    }

    let prev = null
    let current = this.head
    let next;
    
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

  print(){
    let current = this.head
    while (current) {
      console.log(current.value);
      current = current.next
    }
  }
}

const list = new SinglyLinkedList()
list.push("ya")
list.push("lolo")
list.push("meh")
// list.pop()
// list.shift()
// list.unshift("hello")
// list.unshift("yaaaa")
// list.get(1)
// list.set(0, "changed")
// list.insert(0, "yolo")
// list.remove(0)
list.reverse()
list.print()