class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
        
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(val){
        var newnode = new Node(val);
        if(!this.root){
            this.root = newnode;
            return this;
        }
        var current = this.root;
        while(true){
            if(val === current.val) return "Item already exists in tree";
            if(val < current.val){
                if(!current.left){
                    current.left = newnode;
                    return this;
                }
                current = current.left;
            } else {
                if(!current.right){
                    current.right = newnode;
                    return this;
                }
                current = current.right;
            }
        } 
        
    }

    find(val){
        while(this.root === null || val !== this.root.val ){
            if(this.root === null){
                return "NOT FOUND!";

            }else if(val < this.root.val){
                this.root = this.root.left;

            } else if(val > this.root.val) {
                this.root = this.root.right;
            }
            
        }
        return this.root
    }
}

var BST = new BinarySearchTree();









// Todays take out :::: All the numbers smaller than the root gets are grouped  ===> to the left while all the numbers bigger that the root are grouped to the right.
// soooooooo left keeps going down WHILE right keeps going up.
//eg                                 15
//                            9                  20

//                      5          11     | 16        22

//                   3     8  | 10    14


                                                                    // THE TREE STRUCTURE

//  The LEFT of the node holds figures that are LESS than the root :::: soo all the figures by the LEFT must be LESS than the root.

//  The RIGHT of the node holds figures that are GREATER than the root :::: soo all the figures by the RIGHT must be GREATER than the root.

                                                  
                                                        // The PARENT node by the LEFT is less than the root
//                                                                        /            \
//    By the left of this parent holds figures that must be LESS THAN the parent  ||   The Right of this parent holds figures that are greater than the parent but less than the root.




                                                             // The PARENT node by the RIGHT is GREATER than the root
//                                                                        /            \
//    By the left of this parent holds figures that must be LESS THAN the parent  ||   The Right of this parent holds figures that are greater than the parent and also greater than the root.
//                      and greater than the root.




//   Soo the trees goes like MY son can be greater than his parents but not greater than his grand parents.