import { checkCollision } from "../utils/collision.js";
// Player
export function createPlayer(ctx, player) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
// Move Player
export function movePlayer(player, walls, deltaTime, keysPressed) {
    // newX and newY "controls" if the player hits a wall before updating the position
    let newX = player.x;
    let newY = player.y;
    if (keysPressed["ArrowUp"])
        newY -= player.speed * deltaTime;
    if (keysPressed["ArrowDown"])
        newY += player.speed * deltaTime;
    if (keysPressed["ArrowRight"])
        newX += player.speed * deltaTime;
    if (keysPressed["ArrowLeft"])
        newX -= player.speed * deltaTime;
    // Check for collision with walls
    let collidesX = walls.some((wall) => checkCollision(Object.assign(Object.assign({}, player), { x: newX, y: player.y }), wall));
    let collidesY = walls.some((wall) => checkCollision(Object.assign(Object.assign({}, player), { x: player.x, y: newY }), wall));
    if (!collidesX) {
        player.x = newX;
    }
    if (!collidesY) {
        player.y = newY;
    }
    // Control the maps border
    if (player.y <= 0) {
        player.y = 0;
    }
    else if (player.y >= 270) {
        player.y = 270;
    }
    if (player.x <= 0) {
        player.x = 0;
    }
    else if (player.x >= 470) {
        player.x = 470;
    }
}
