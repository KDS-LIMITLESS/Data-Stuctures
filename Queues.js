class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    
    enqueue(value){
        var newnode = new Node(value);
        if(!this.first){
            this.first = newnode;
            this.last = newnode;
        } else {
            this.last.next = newnode;
            this.last = newnode;
        }
        var recorder = (++this.size) + ': ' + newnode.value 
        return recorder;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var queue = new Queue();
