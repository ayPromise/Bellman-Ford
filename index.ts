interface IEdge{
    from:string;
    to:string;
    weight:number;
}

interface IGraph {
    path:{
        start:string;
        end?:string;
    }
    edges:Array<IEdge>
}

function bellmanFord(input: IGraph){
    const distancesHash = new Map<string, number>()
    const previousVertHash = new Map<string, string|null>()
    const {edges, path} = input

    for(let G of edges){
        distancesHash.set(G.from, Infinity)
        previousVertHash.set(G.from, null)
    }

    distancesHash.set(path.start, 0)

    for(let G of edges){
        const passedDistance = distancesHash.get(G.from) ?? Infinity
        const sum = passedDistance + G.weight
        const prevDistance = distancesHash.get(G.to) ?? Infinity
        if(prevDistance > sum)
        {
            distancesHash.set(G.to, sum)
            previousVertHash.set(G.to, G.from)
        }
    }

    if(path.end)
    {
        let endVertex : string= path.end
        const fromStartToEnd : string[] = []
        const separator : string = "->"
        while(endVertex !== path.start){
            const prevVertex : string | null = previousVertHash.get(endVertex) ?? "null"
            fromStartToEnd.unshift(prevVertex)
            endVertex = prevVertex
        }

        fromStartToEnd.push(path.end)

        return fromStartToEnd.join(separator)
    }
}