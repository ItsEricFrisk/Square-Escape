// Level 1
const walls1 = [{ x: 50, y: 0, width: 50, height: 250, color: "#000" },
    { x: 355, y: 50, width: 100, height: 250, color: "#000" },
    { x: 90, y: 50, width: 150, height: 40, color: "#000" },
    { x: 280, y: 50, width: 80, height: 40, color: "#000" },
    { x: 455, y: 130, width: 45, height: 170, color: "#000" },
    { x: 0, y: 0, width: 50, height: 200, color: "#000" }];
const goal1 = { x: 455, y: 100, width: 45, height: 30, color: "lightgreen" };
const player1 = { x: 10, y: 210, width: 30, height: 30, speed: 130, color: "#000" };
const enemy1 = [{ x: 455, y: 5, width: 30, height: 30, color: "#eb1202", speed: .6, movementRangeLeft: 120, movementRangeRight: 455 },
    { x: 100, y: 105, width: 30, height: 30, color: "#eb1202", speed: .5, movementRangeLeft: 100, movementRangeRight: 320 },
    { x: 320, y: 155, width: 30, height: 30, color: "#eb1202", speed: .5, movementRangeLeft: 100, movementRangeRight: 320 },
    { x: 100, y: 205, width: 30, height: 30, color: "#eb1202", speed: .5, movementRangeLeft: 100, movementRangeRight: 320 },
    { x: 0, y: 260, width: 30, height: 30, color: "#eb1202", speed: .6, movementRangeLeft: 5, movementRangeRight: 320 },
];
// Level 2
const walls2 = [{ x: 50, y: 0, width: 50, height: 250, color: "#000" },
    { x: 355, y: 50, width: 100, height: 250, color: "#000" },
    { x: 90, y: 50, width: 150, height: 40, color: "#000" },
    { x: 280, y: 50, width: 80, height: 40, color: "#000" },
    { x: 455, y: 130, width: 45, height: 170, color: "#000" },
    { x: 0, y: 0, width: 50, height: 200, color: "#000" }];
const goal2 = { x: 455, y: 100, width: 45, height: 30, color: "lightgreen" };
const player2 = { x: 10, y: 210, width: 30, height: 30, speed: 130, color: "#000" };
const enemy2 = [{ x: 455, y: 5, width: 30, height: 30, color: "#eb1202", speed: .6, movementRangeLeft: 120, movementRangeRight: 455 },
    { x: 100, y: 105, width: 30, height: 30, color: "#eb1202", speed: .5, movementRangeLeft: 100, movementRangeRight: 320 },
    { x: 320, y: 155, width: 30, height: 30, color: "#eb1202", speed: .5, movementRangeLeft: 100, movementRangeRight: 320 },
    { x: 100, y: 205, width: 30, height: 30, color: "#eb1202", speed: .5, movementRangeLeft: 100, movementRangeRight: 320 },
    { x: 0, y: 260, width: 30, height: 30, color: "#eb1202", speed: .6, movementRangeLeft: 5, movementRangeRight: 320 },
];
export {};
