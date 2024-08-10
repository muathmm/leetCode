/**
 * @param {string[]} grid
 * @return {number}
 */
const aux = {
    " "  : [[0,0,0], [0,0,0], [0,0,0]],
    "/"  : [[0,0,1], [0,1,0], [1,0,0]],
    "\\" : [[1,0,0], [0,1,0], [0,0,1]]
};

const bux = {
    'dx' : [-1, 1, 0, 0],
    'dy' : [ 0, 0,-1, 1]
} 

function dfs(graph, i, j, rows, cols) {
    if(i<0 || i==rows || j<0 || j==cols || graph[i][j]==1){
        return;
    } 
    graph[i][j] = 1;
    for(let k=0;k<4;k++){
        dfs(graph, i+bux['dx'][k], j+bux['dy'][k], rows, cols);
    }
};

const generateGraph = (grid) => {
    let n=grid.length, m=grid[0].length;
    let graph = Array.from({ length: 3*n }, () => Array(3*m).fill(0));

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            const replacement = aux[grid[i][j]];
            graph[3*i].splice(3*j, 3, ...replacement[0]); 
            graph[3*i+1].splice(3*j, 3, ...replacement[1]);
            graph[3*i+2].splice(3*j, 3, ...replacement[2]);
        }
    }

    return graph;
};

var regionsBySlashes = function(grid) {
    let n=grid.length, m=grid[0].length;
    let graph = generateGraph(grid);
    // console.log(graph);

    let noOfRegions = 0;

    for(let i=0;i<3*n;i++){
        for(let j=0;j<3*m;j++){
            if(graph[i][j] == 0){
                dfs(graph, i, j, 3*n , 3*m);
                noOfRegions++;
            }
        }
    }

    return noOfRegions;
};