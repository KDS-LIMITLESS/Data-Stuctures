class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return 'No item to remove'
        }else{
            var current = this.head;
            var newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this
        }
    }

    shift(){
        if(!this.head) return 'Empty List';
        var current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0){
            this.tail = null;
        }
        return this
    }
    
    unshift(val){
        var val = new Node(val);
        if(!this.head){
            this.head = val;
            this.tail = this.head;
        }else{
            val.next = this.head;
            this.head = val;
        }
        this.length++;
        return this
    }

    delete(){
        if(!this.head) return 'Empty List! Nothing to DELETE';
        while(this.length !== 0){
            this.pop();
        }
        return this

    }

    get(index){
        if(index < 1 || index > this.length) return 'No item in this index. Index starts at 1 and ends at '+ (this.length);
        var count = 1;
        var current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, value){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true
        }
        return false
    }

    insert(index, value){
        if(index < 1 || index > this.length) return 'Not Found! Please choose a VALID index';
        if(index === this.length)return this.push(value);
        if(index === 1) return this.unshift(value);
        
        var val = new Node(value);
        var prev = this.get(index - 1); 
        var temp = prev.next;
        prev.next = val;
        val.next = temp;
        this.length++;
        return this
    }
    remove(index){
        if(index < 0 || index >= this.length) return 'nothing to remove!';
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        
        var prev = this.get(index - 1);
        var remove = prev.next;
        prev.next = remove.next;
        this.length--;
        return this      
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i =  0; i < this.length; i ++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }
}


                    //CODE RUN // CODE RUN // CODE RUN  // CODE RUN  // CODE RUN // CODE RUN // CODE RUN

var list = new singlyLinkedList()

