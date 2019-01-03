/*
Binary Search Tree 

*/


//Setting up the class Node that consists of the value itself, its left and right nodes which are default to null
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}
//A node method that allow the insertion of a node - a node will first be created with the inserted value,
//depends on the value, the node will be inserted at the appropriate location, the order is up to the creator
Node.prototype.insertNode = function(val){
    var n = new Node(val)
    if(val <= this.value){
        if(this.left == null){
            this.left = n
        }else{
            this.left.insertNode(val)
        }
    }else{
        if(this.right == null){
            this.right = n
        }else{
            this.right.insertNode(val)
        }
    }
}



//the Binary Search Tree class itself which consists of a root - the root is just a node
function BST(){
    this.root = null
}

//A method to add nodes to the tree, if the tree is empty, the first node will become the root
//Since the tree has nodes, each node has access to the methods in the Node class, the previous method to insert Node is used here
BST.prototype.addNode = function(val){
    var n = new Node(val)
    if(this.root == null){
        this.root = n
    }else{
        this.root.insertNode(val)
    }
}

//In Order Traversal will traverse through the tree from left to root to right resulting an in-order list
//This method works simply by having a node continues to look left till null, returns, console log its value, then look right which in turn will look left again and so on
//the parameter takes in a node - use the root for the entire tree
BST.prototype.inOrder=function(node){
    if(node != null){
        this.inOrder(node.left);
        console.log(node.value)
        this.inOrder(node.right)
    }
}

//Max and min Node looks for the max and min value of the tree starting at node inserted (parameter) - use the root for the entire tree
BST.prototype.minNode=function(node){
    if(node.left == null){
        console.log("min:", node.value)
    }else{
        this.minNode(node.left)
    }
}

BST.prototype.maxNode=function(node){
    if(node.right == null){
        console.log("max:", node.value)
    }else{
        this.maxNode(node.right)
    }
}


var a = new BST()
a.addNode(44)
a.addNode(32)
a.addNode(42)
a.addNode(77)
a.addNode(92)
a.addNode(86)
a.addNode(63)
a.addNode(12)
a.addNode(8)
a.addNode(24)
a.inOrder(a.root.left)
// a.minNode(a.root)
// a.maxNode(a.root)
