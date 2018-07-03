// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (this.head) {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            return node;
        }
        else {
            return null;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prevNode;
        let node = this.head;

        while (node.next) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = null;
    }

    insertLast(data) {
        let lastNode = this.getLast();

        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.insertFirst(data);
        }

    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.insertFirst(data);
            return;
        }

        let prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }

    forEach(func) {
        if (this.head) {
            let node = this.head;
            while (node) {
                func(node);
                node = node.next;
            }
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
