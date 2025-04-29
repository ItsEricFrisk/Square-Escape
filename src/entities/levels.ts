import { Level } from "../types/types.js"

export const level1: Level = {
    //  Start position
    player: {x: 5, y: 265, width: 30, height: 30, speed: 130, color: "#000"},
    enemy: [
        {x: 455, y: 215, width: 30, height: 30, color: "#eb1202", speed: 1.5, movementRangeLeft: 400, movementRangeRight: 465, movementRangeBottom: 0, movementRangeTop: 0, movingHorizontal: true},
        {x: 455, y: 95, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 0, movementRangeRight: 465, movementRangeBottom: 0, movementRangeTop: 0, movingHorizontal: true},
        {x: 340, y: 270, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 160, movingHorizontal: false},
        {x: 260, y: 120, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 160, movingHorizontal: false},
        {x: 170, y: 270, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 160, movingHorizontal: false},
        {x: 80, y: 120, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 160, movingHorizontal: false},
    ],
    walls: [ 
        {x: 0, y: 200, width: 460, height: 10, color: "#000"}, 
        {x: 0, y: 250, width: 460, height: 10, color: "#000"}, 
        {x: 0, y: 210, width: 390, height: 40, color: "#000"}, 
        {x: 0, y: 0, width: 460, height: 55, color: "#000"},
        {x: 0, y: 55, width: 260, height: 35, color: "#000"},
        {x: 40, y: 130, width: 460, height: 30, color: "#000"},
        {x: 300, y: 55, width: 160, height: 35, color: "#000"},
    ],
    goal: { x: 460, y: 0, width: 40, height: 30, color: "lightgreen" }
}

export const level2: Level = {
    //  Start position
    player: {x: 355, y: 265, width: 30, height: 30, speed: 130, color: "#000"},
    enemy: [
        {x: 455, y: 215, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 100, movementRangeRight: 465, movementRangeBottom: 0, movementRangeTop: 0, movingHorizontal: true},
        {x: 140, y: 125, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 160, movementRangeRight: 465, movementRangeBottom: 0, movementRangeTop: 0, movingHorizontal: true},
        {x: 240, y: 5, width: 30, height: 30, color: "#eb1202", speed: 2, movementRangeLeft: 240, movementRangeRight: 465, movementRangeBottom: 0, movementRangeTop: 0, movingHorizontal: true},
        {x: 5, y: 5, width: 30, height: 30, color: "#eb1202", speed: 1.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        
    ],
    walls: [ {x: 40, y: 250, width: 310, height: 50, color: "#000"}, 
        {x: 390, y: 250, width: 110, height: 50, color: "#000"},
        {x: 205, y: 160, width: 300, height: 50, color: "#000"},
        {x: 155, y: 160, width: 50, height: 15, color: "#000"},
        {x: 40, y: 160, width: 120, height: 50, color: "#000"},
        {x: 40, y: 40, width: 75, height: 160, color: "#000"},
        {x: 115, y: 40, width: 45, height: 80, color: "#000"},
        {x: 200, y: 0, width: 35, height: 120, color: "#000"},
        {x: 235, y: 40, width: 75, height: 80, color: "#000"},
        {x: 355, y: 40, width: 75, height: 80, color: "#000"},
        {x: 430, y: 85, width: 75, height: 35, color: "#000"},
    ],
    goal: { x: 430, y: 55, width: 70, height: 30, color: "lightgreen" }
}

export const level3: Level = {
    //  Start position
    player: {x: 5, y: 150, width: 30, height: 30, speed: 130, color: "#000"},
    enemy: [
        {x: 115, y: 270, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        {x: 155, y: 0, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        {x: 195, y: 270, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        {x: 235, y: 0, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        {x: 275, y: 270, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        {x: 315, y: 0, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
        {x: 355, y: 270, width: 30, height: 30, color: "#eb1202", speed: 3.5, movementRangeLeft: 0, movementRangeRight: 0, movementRangeBottom: 270, movementRangeTop: 0, movingHorizontal: false},
    ],
    walls: [ 
        {x: 0, y: 0, width: 100, height: 125, color: "#000"}, 
        {x: 400, y: 0, width: 100, height: 125, color: "#000"}, 
        {x: 0, y: 200, width: 100, height: 125, color: "#000"}, 
        {x: 400, y: 200, width: 100, height: 125, color: "#000"},
    ],
    goal: { x: 460, y: 125, width: 40, height: 75, color: "lightgreen" }
}

export const level4: Level = {
    //  Start position
    player: {x: 10, y: 210, width: 30, height: 30, speed: 130, color: "#000"},
    enemy: [
        {x: 455, y: 5, width: 30, height: 30, color: "#eb1202", speed: 2.2, movementRangeLeft: 120, movementRangeRight: 455, movementRangeTop: 0, movementRangeBottom: 0, movingHorizontal:true},
        {x: 100, y: 105, width: 30, height: 30, color: "#eb1202", speed: 2.5, movementRangeLeft: 100, movementRangeRight: 320, movementRangeTop: 0, movementRangeBottom: 0, movingHorizontal:true},
        {x: 320, y: 155, width: 30, height: 30, color: "#eb1202", speed: 2.5, movementRangeLeft: 100, movementRangeRight: 320, movementRangeTop: 0, movementRangeBottom: 0, movingHorizontal:true},
        {x: 100, y: 205, width: 30, height: 30, color: "#eb1202", speed: 2.5, movementRangeLeft: 100, movementRangeRight: 320, movementRangeTop: 0, movementRangeBottom: 0, movingHorizontal:true},
        {x: 0, y: 260, width: 30, height: 30, color: "#eb1202", speed: 3, movementRangeLeft: 5, movementRangeRight: 320, movementRangeTop: 0, movementRangeBottom: 0, movingHorizontal:true},
    ],
    walls: [ {x: 50, y: 0, width: 50, height: 250, color: "#000"}, 
        {x: 355, y: 50, width: 100, height: 250, color: "#000"},
        {x: 90, y: 50, width: 150, height: 40, color: "#000"},
        {x: 280, y: 50, width: 80, height: 40, color: "#000"},
        {x: 455, y: 130, width: 45, height: 170, color: "#000"},
        {x: 0, y: 0, width: 50, height: 200, color: "#000"}],
    goal: { x: 455, y: 100, width: 45, height: 30, color: "lightgreen" }
}   