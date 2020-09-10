class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  get value() {
    return this.value;
  }
  get next() {
    return this.next;
  }
}

export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) throw new Error('Creating list from undefined array');
  if (array.length === 0) throw new Error('Creating list from empty array');

  let prev = null;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    const node = new Node(array[i]);
    node.next = prev;
    prev = node;
  }

  return prev;
}
