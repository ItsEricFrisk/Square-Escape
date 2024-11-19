import { checkCollision } from "../utils/collision.js";
// Goal
export function createGoal(ctx, goal) {
    ctx.fillStyle = goal.color;
    ctx.fillRect(goal.x, goal.y, goal.width, goal.height);
}
export function goalConditions(player, keysPressed, currentLevelIndex, levels, currentLevel) {
    if (checkCollision(currentLevel.goal, player)) {
        player.x = currentLevel.player.x;
        player.y = currentLevel.player.y;
        keysPressed["ArrowUp"] = false;
        keysPressed["ArrowDown"] = false;
        keysPressed["ArrowLeft"] = false;
        keysPressed["ArrowRight"] = false;
        if (currentLevelIndex <= levels.length - 1) {
            return currentLevelIndex + 1;
        }
    }
    return currentLevelIndex;
}
