// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue() {

  }

  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    this.length--; // decreaments the length of our Queue

    return current.value; // returns the removed Node's value
  }
}

module.exports = Queue;
