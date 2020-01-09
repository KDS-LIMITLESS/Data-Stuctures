class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        var node = new Node(value);
        if(!this.first){
            this.last = node;
            this.first = node;
        } else {
            var temp = this.first;
            this.last = node;
            this.last.next = temp;
        }
        
        return ++this.size;
    }

    pop(){
        if(this.size === 0) return 'Empty Stack'
        var popedNode = this.last;
        if(this.first === this.last){
            this.first = null;
        }
        this.last = this.last.next
        this.size--;
        return popedNode.value;
    }   

}


var stack = new Stack();




