namespace Tree{
    export interface INode{
        value:any,
        left: INode|null,
        right: INode|null,
    }

    export class Node implements INode{
        value:any;
        left:INode | null;
        right:INode | null;

        constructor(value:any){
            this.value = value,
            this.left = null,
            this.right=null
        }
    }
}

const A_root = new Tree.Node("A")
const B = new Tree.Node("B")
const C = new Tree.Node("C")
const D = new Tree.Node("D")
const E = new Tree.Node("E")
const F = new Tree.Node("F")

A_root.left = B
A_root.right = C

B.left = D
B.right = E

C.right = F



const depthFirstValues = (root:Tree.INode) : any[] | []=>{
    if(!root) return []
    
    const stack : Tree.INode[] = [ root ];
    const result : any = [   ];

    while(stack.length > 0)
    {
        const node = stack.pop() as Tree.INode
        result.push(node.value)
        // we want to go left-hand so stack has to push right-hand nodes first
        if(node?.right) stack.push(node.right)
        if(node?.left) stack.push(node.left)
    }

    return result
}
console.log(`1. Deep First Values:`, depthFirstValues(A_root))

