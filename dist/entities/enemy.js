import { checkCollision } from "../utils/collision.js";
const attemptsHolder = document.getElementById("attempts");
let attempts = 0;
// Enemy
export function createEnemy(ctx, enemy) {
    enemy.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}
// Move enemies
export function moveEnemy(enemy, player, currentLevel, currentLevelIndex) {
    enemy.forEach(enemy => {
        const steps = 5; // 5 "steps" per iteration
        // Horizontal movement
        if (!enemy.movingHorizontal) {
            // y
            if (enemy.y >= enemy.movementRangeBottom) {
                enemy.speed = -Math.abs(enemy.speed); // Change to UP
            }
            else if (enemy.y <= enemy.movementRangeTop) {
                enemy.speed = Math.abs(enemy.speed); // Change to DOWN
            }
            // Move enemy 
            enemy.y += steps * enemy.speed;
        }
        else {
            // Vertical movement
            if (enemy.x >= enemy.movementRangeRight) {
                enemy.speed = -Math.abs(enemy.speed); // Change to LEFT
            }
            else if (enemy.x <= enemy.movementRangeLeft) {
                enemy.speed = Math.abs(enemy.speed); // Change to RIGHT
            }
            // Move enemy
            enemy.x += steps * enemy.speed;
        }
        let playerHit = false;
        // Set player back to start and change status on playerHit
        if (checkCollision(enemy, player)) {
            player.x = currentLevel.player.x;
            player.y = currentLevel.player.y;
            playerHit = true;
        }
        // Add 1 to attempts
        if (playerHit) {
            attempts += 1;
            attemptsHolder.innerHTML = attempts.toString();
        }
    });
}
