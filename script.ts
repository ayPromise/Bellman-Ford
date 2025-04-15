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

const A_root = new Tree.Node(3)
const B = new Tree.Node(11)
const C = new Tree.Node(4)
const D = new Tree.Node(4)
const E = new Tree.Node(-2)
const F = new Tree.Node(1)

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




const depthFirstValuesRecurvive = (root:Tree.INode|null|undefined) : any[] | [] =>{
    if(!root) return []
    const leftHandValues = depthFirstValuesRecurvive(root.left)
    const rightHandValues = depthFirstValuesRecurvive(root.right)

    return [root.value, ...leftHandValues, ...rightHandValues]
}
console.log(`2. Deep First Values(recursive):`, depthFirstValuesRecurvive(A_root))



const breadthFirstValues = (root:Tree.INode | undefined | null) : any[] | []=>{
    if(!root) return []
    const result : any[] = [   ]
    const queue : Tree.INode[] = [ root ]
    while(queue.length > 0){
        const node = queue.shift()
        result.push(node?.value)
        if(node?.left) queue.push(node.left)
        if(node?.right) queue.push(node.right)
    }
    return result
}
console.log(`3. Breadth First Values:`, breadthFirstValues(A_root))


const breadthFirstValuesRecursive = (root:Tree.INode | undefined | null) :  Set<any> | []=>{
    if(!root) return []
    const queue = new Set()
    queue.add(root.value)
    if(root.left) queue.add(root.left.value)
    if(root.right) queue.add(root.right?.value)

    return new Set([...queue, ...breadthFirstValuesRecursive(root.left), ...breadthFirstValuesRecursive(root.right)])
}
console.log(`4. Breadth First Values(recursive):`, breadthFirstValuesRecursive(A_root))


const treeSum = (root:Tree.INode | null | undefined) : number | 0 =>{
    let sum = 0
    const stack = [ root ]
    while(stack.length > 0)
    {
        const node = stack.pop()
        sum += node?.value
        if(node?.left) stack.push(node.left)
        if(node?.right) stack.push(node.right)
    }
    return sum
}
console.log(`5. Tree sum:`, treeSum(A_root))



const treeSumRecursive = (root:Tree.INode | undefined | null) :  number | 0 =>{
    if(!root) return 0
    return root.value + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}
console.log(`6. Tree sum(recursive):`, treeSumRecursive(A_root))

