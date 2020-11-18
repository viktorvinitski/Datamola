class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class List{
    constructor(root){
        this.root = new Node(root)
    }
}