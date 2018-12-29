/*
Binary Search Tree 
    
*/

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

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

function BST(){
    this.root = null
}

BST.prototype.addNode = function(val){
    var n = new Node(val)
    if(this.root == null){
        this.root = n
    }else{
        this.root.insertNode(val)
    }
}

var a = new BST()
a.addNode(5)
a.addNode(3)
a.addNode(7)
a.addNode(4)
a.addNode(10)
a.addNode(1)
a.addNode(6)
console.log(a)
