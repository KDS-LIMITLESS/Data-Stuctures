class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DOUBLY_LINKED_LIST{
    constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
            
        }else{
            this.tail.next = node;
            node.prev = this.tail
            this.tail = node
        }
        this.length++;
        return this      
    }
    
    pop(){
        if(!this.head) return "List is Empty!";
        if(this.length === 1){
            this.head = null;  
            this.tail = null;
        }else{
            var newtail = this.tail;
            var Tail = newtail.prev;
            Tail.next = null;
            newtail.prev = null;
            this.tail = Tail;
            //this.tail = newtail.prev;
            //this.tail.next = null;
            //newtail.prev = null;
        }
        this.length--;
        return this

    }
    shift(){
        if(!this.head) return 'No head node to shift or remove'
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            var head = this.head.next;
            this.head.next = null;
            head.prev = null;
            this.head = head;
        }
        this.length--;
        return this
    }

    unshift(val){
        var node = new Node(val);
        if(this.length === 0) return this.push(val);

        var newhead = this.head;
        newhead.prev = node;
        node.next = newhead;
        this.head = node;
        this.length++;
        return this
    }   

    get(index){
        if(index < 1 || index > this.length) return "Index not Found. Index started at 1 and ended at " + (this.length);
        if(index === 1) return this.head
        if(index <= this.length / 2){
            var count = 1;
            var currnet = this.head;
            while(count !== index){ 
                current = currnet.next;
                count++;
            }
			return current;
			
        } else {
            var count = this.length ;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current
    }
    
    set(index, val){
        var foundnode = this.get(index);
        if(index < 1) return 'The index you specified is not a valid index; Please check the index and try agian.'; 
        if(index > this.length) return 'The index you specified is too large; Please check the index and try agian.';        
        foundnode.val = val;
        return 'Value Changed!'        
    }

    insert(index, val){
        if(index < 1  || index > this.length) return "Invalid index";
        if(index === 1) return !!this.unshift(val);
        if(index === this.length || index === this.length + 1) return !!this.push(val)
        
        var newnode = new Node(val);
        var node = this.get(index-1);
        var afternode = node.next;
        //var beforenode = node.prev;

        node.next = newnode;
        newnode.prev = node;
        newnode.next = afternode;
        afternode.prev = newnode;
        this.length++;
        return 'SUCCESS!'
    }  //FIXED  // insert is not returning the value of index 1.  please fix (eg.  console.log(list.get(1)))__________returns Undefined__________

    remove(index){
        if(index < 1)  return 'nothing to remove!';
        if(this.length === 0) return 'Sorry there is nothing in this list'
        if(index > this.length) return 'Index too large. List ended at index ' + (this.length)
        if(index === this.length) return this.pop();
        if(index === 1) return this.shift();

        var foundnode = this.get(index);
        var nextnode = foundnode.next;
        var previous = foundnode.prev;

        previous.next = nextnode;
        nextnode.prev = previous;
        this.length--;
        return this
    }
}



var list = new DOUBLY_LINKED_LIST() 
            

