/* Queue
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a FIFO (First In First Out)
 * system, where the first item to enter the queue is the first to be removed,
 * All these operation complexities are O(1).
 * This implementation following the linked list structure.
 */

class Queue {
    #size
  
    constructor() {
      this.head = null
      this.tail = null
      this.#size = 0
  
      return Object.seal(this)
    }
  
    get length() {
      return this.#size
    }
  
    /**
     * @description - Add a value to the end of the queue
     * @param {*} data
     * @returns {number} - The current size of queue
     */
    enqueue(data) {
      const node = { data, next: null }
  
      if (!this.head && !this.tail) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node
        this.tail = node
      }
  
      return ++this.#size
    }
  
    /**
     * @description - Removes the value at the front of the queue
     * @returns {*} - The first data of the queue
     */
    dequeue() {
      if (this.isEmpty()) {
        throw new Error('Queue is Empty')
      }
  
      const firstData = this.peekFirst()
  
      this.head = this.head.next
  
      if (!this.head) {
        this.tail = null
      }
  
      this.#size--
  
      return firstData
    }
  
    /**
     * @description - Return the item at the front of the queue
     * @returns {*}
     */
    peekFirst() {
      if (this.isEmpty()) {
        throw new Error('Queue is Empty')
      }
  
      return this.head.data
    }
  
    /**
     * @description - Return the item at the tail of the queue
     * @returns {*}
     */
    peekLast() {
      if (this.isEmpty()) {
        throw new Error('Queue is Empty')
      }
  
      return this.tail.data
    }
  
    /**
     * @description - Return the array of Queue
     * @returns {Array<*>}
     */
    toArray() {
      const array = []
      let node = this.head
  
      while (node) {
        array.push(node.data)
        node = node.next
      }
  
      return array
    }
  
    /**
     * @description - Return is queue empty or not
     * @returns {boolean}
     */
    isEmpty() {
      return this.length === 0
    }
}



/**
 * Breadth-first search is an algorithm for traversing a graph.
 *
 * It discovers all nodes reachable from the starting position by exploring all of the neighbor nodes at the present
 * depth prior to moving on to the nodes at the next depth level.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Breadth-first_search)
 * see https://www.koderdojo.com/blog/breadth-first-search-and-shortest-path-in-csharp-and-net-core
 */

export function breadthFirstSearch(graph, startingNode) {
  // visited keeps track of all nodes visited
  const visited = new Set()

  // queue contains the nodes to be explored in the future
  const queue = new Queue()
  queue.enqueue(startingNode)

  while (!queue.isEmpty()) {
    // start with the queue's first node
    const node = queue.dequeue()

    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node)
      const neighbors = graph[node]

      // put all its neighbors into the queue
      for (let i = 0; i < neighbors.length; i++) {
        queue.enqueue(neighbors[i])
      }
    }
  }

  return visited
}