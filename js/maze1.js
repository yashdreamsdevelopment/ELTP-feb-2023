const maze = [
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '*', '1', '0', '1'],
];

let position = [4, 1];

const move = (edgeIndex, edge, xOffset, yOffset) => {
    // const x = position[0];
    // const y = position[1];
    const [x, y] = position;
    const x_or_y = position[edgeIndex];
    if(x_or_y === edge|| maze[x + xOffset][y + yOffset] === '0') return;

    maze[x][y] = '1';
    maze[x + xOffset][y + yOffset] = '*';
    position[edgeIndex] += edgeIndex === 0 ? xOffset : yOffset;
    printMaze();
}

const moveDown = () => move(0, maze.length - 1, 1, 0);
const moveUp = () => move(0, 0, -1, 0);
const moveRight = () => move(1, maze.length - 1, 0, 1);
const moveLeft = () => move(1, 0, 0, -1); 

const printMaze = () => {
    for(let row of maze) {
        console.log(row);
    }
    console.log("============================")
}

printMaze();

const directions = 'ddddlrruuuurrdddd';
const directionMap = { d: moveDown, r: moveRight, l: moveLeft, u: moveUp };

for(let direction of directions) {
    directionMap[direction]();
}