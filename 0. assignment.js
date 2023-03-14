const n = 4;
const matrix = [];

const directions = 'RDLU';
let currentDirectionIndex = 0;
let currentDirection = directions[currentDirectionIndex];
const position = [0, 0];

for (let i = 1; i <= n ** 2; i++) {
    const [rowIndex, columnIndex] = position;
    console.log(currentDirection);
    if (!matrix[rowIndex]) matrix[rowIndex] = [];

    if (!matrix[rowIndex][columnIndex]) {
        matrix[rowIndex][columnIndex] = i;
    }

    if (currentDirection === "R") {
        position[1]++;

        if (position[1] === n || matrix[rowIndex][columnIndex + 1]) {
            position[1]--;
            position[0]++;
            currentDirectionIndex += 1;
            currentDirection = directions[currentDirectionIndex];
            continue;
        }
    }

    if (currentDirection === "D") {
        position[0]++;

        if (position[0] === n || matrix[rowIndex + 1][columnIndex]) {
            position[0]--;
            currentDirectionIndex += 1;
            currentDirection = directions[currentDirectionIndex]
            continue;
        }
    }

    if (currentDirection === "L") {
        position[1]--;

        if (position[1] === -1 || matrix[rowIndex][columnIndex - 1]) {
            position[1]++;
            currentDirectionIndex += 1;
            currentDirection = directions[currentDirectionIndex];
            continue;
        }
    }

    if (currentDirection === "U") {
        position[0]--;

        if (position[0] === -1 || matrix[rowIndex][columnIndex - 1]) {
            position[0]++;
            currentDirectionIndex = 0;
            currentDirection = directions[currentDirectionIndex];
            continue;
        }
    }

}