class node {
    key: any | null
    next: any
    constructor(key: any) {
        this.next = null;
        this.key = key;
    }


}

class listNode {
    headNode: node
    length:number = 0
    constructor(key: any) {
        this.headNode = new node(key)
    }
    
    insertNode (node:node){
        if(this.headNode.key!=null) {
            // 说明headnode 下已经有节点
            node.next = this.headNode
            console.log('tag', '1')

        }else {
            // 没有一个节点
            node.next = null
            console.log('tag', 'null')

        }
        this.headNode = node

    }
    getNode (){
        return this.headNode 
    }

}


// 初始化一个单向链表，表头应该是null

let listnode = new listNode(null)
let insetnode1 = new node(1)
let insetnode2 = new node(2)
listnode.insertNode(insetnode1)
listnode.insertNode(insetnode2)
console.log(listnode.getNode())
