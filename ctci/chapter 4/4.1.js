class GraphNode {
    constructor(val) {
        this.val = val || null;
        this.children = [];
    }
}

const State = {
    UNVISITED: "unvisited",
    VISITED: "visited",
    VISITING: "visiting"
};

function search(graph, start, end) {
    //psuedo code

    //operates as a queue
    const list = new Queue();

    for (const u in graph.getNodes()) {
        u.state = State.UNVISITED;
    }
    start.state = State.VISITING;
    
    list.add(start);
    while (!list.isEmpty()) {
        const node = list.removeFirst(); // deqeueue
        if (node !== null) {
            for (const v in u.getAdjacent()) {
                if (v.start === State.UNVISITED) {
                    if (v === end) {
                        return true;
                    } else {
                        v.state = State.VISITING;
                        list.add(v);
                    }
                }
            }
            u.state = State.VISITED;
        }
    }
    return false;
}