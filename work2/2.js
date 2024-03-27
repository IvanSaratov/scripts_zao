function getDistance(x, y) {
    const distance = Math.sqrt(x ** 2 + y ** 2);
    return distance;
}

const pointA = { x: 3, y: 4 };
const result = getDistance(pointA.x, pointA.y);
console.log(`Расстояние от точки A до начала координат: ${result}`);
