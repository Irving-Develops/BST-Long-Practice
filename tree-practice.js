const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  while(rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.val;
}

function findMaxBST (rootNode) {

  while(rootNode.right) {
    rootNode = rootNode.right;
  }
  return rootNode.val;
}

function findMinBT (rootNode) {
  // Your code here
  if(!rootNode) return;

  let result = rootNode.val
  let leftR = findMinBT(rootNode.left)
  let rightR = findMinBT(rootNode.right)

  if(leftR < result) result = leftR
  if(rightR < result) result = rightR

  return result;

}

function findMaxBT (rootNode) {
  // Your code here
    if (!rootNode) return;

    let result = rootNode.val
    let leftR = findMaxBT(rootNode.left)
    let rightR = findMaxBT(rootNode.right)

    if (leftR > result) result = leftR
    if (rightR > result) result = rightR

    return result;

}

function getHeight (rootNode) {

  let left = leftCalculate(rootNode)
  let right = rightCalculate(rootNode)

  function leftCalculate(rootNode) {
    if (rootNode === null) return 0;

    return 1 + leftCalculate(rootNode.left)
  }

  function rightCalculate(rootNode) {
    if (rootNode === null) return 0;

    return 1 + rightCalculate(rootNode.right)
  }

  if (right > left) return right - 1;
  else return left - 1;
}

function countNodes (rootNode) {
  let total = 0;
  let breadthFirstTraversal = () => {

    // Put the starting node in a queue
    const queue = [rootNode];

    // While the queue is not empty
    while (queue.length) {

      // Dequeue a node and print it
      let rootNode = queue.shift();
      total += 1;

      // Put all of the rootNode's children in the back of the queue
      if (rootNode.left) queue.push(rootNode.left);
      if (rootNode.right) queue.push(rootNode.right);
    }
    return total;
  }
  return breadthFirstTraversal();
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
