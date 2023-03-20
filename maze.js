const maze = [
    ['*', '0', '1', '1', '1'],
    ['1', '1', '1', '0', '1'],
    ['0', '1', '0', '1', '1'],
    ['1', '0', '1', '1', '0'],
    ['1', '0', '1', '1', '1'],
];

let position = [0, 0];
const maxRowEdge = maze.length - 1;
const maxColumnEdge = maze[0].length - 1 || 0;

const move = (edgeToCheckIndex, edge, xOffset, yOffset) => {
    const [x, y] = position
    if (position[edgeToCheckIndex] !== edge && maze[x + xOffset][y + yOffset] === '0') return printMaze();
    
    maze[x][y] = '1'
    position = [x + xOffset, y + yOffset]
    maze[x + xOffset][y + yOffset] = '*'
    printMaze();
}

const moveDown = () => move(0, maxRowEdge, 1, 0);
const moveUp = () => move(0, 0, -1, 0);
const moveRight = () => move(1, maxColumnEdge, 0, 1);
const moveLeft = () => move(1, 0, 0, -1);
const printMaze = () => {
    for(let row of maze) {
        console.log(row);
    }
    console.log("===========================")
}

printMaze();
const directionMoveMap = { d: moveDown, r: moveRight, l: moveLeft, u: moveUp }
const directions = 'drrurrddlddr';
for(let direction of directions) {
    directionMoveMap[direction]();
}