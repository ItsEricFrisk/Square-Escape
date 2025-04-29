import { Enemy, Player, Level } from "../types/types";
import { checkCollision } from "../utils/collision.js";

// Enemy
export function createEnemy(ctx: CanvasRenderingContext2D, enemy: Enemy[]): void {
  enemy.forEach(enemy => {
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });
}

// Move enemies
export function moveEnemy(
  enemy: Enemy[],
  player: Player,
  currentLevel: Level,
  deltaTime: number
): boolean {
  let playerHitThisFrame = false;

  enemy.forEach((enemy) => {
    if (enemy._directionX === undefined) enemy._directionX = 1;
    if (enemy._directionY === undefined) enemy._directionY = 1;

    if (enemy.movingHorizontal) {
      if (enemy.x >= enemy.movementRangeRight) enemy._directionX = -1;
      else if (enemy.x <= enemy.movementRangeLeft) enemy._directionX = 1;

      enemy.x += enemy.speed * enemy._directionX * deltaTime * 60;
    } else {
      if (enemy.y >= enemy.movementRangeBottom) enemy._directionY = -1;
      else if (enemy.y <= enemy.movementRangeTop) enemy._directionY = 1;

      enemy.y += enemy.speed * enemy._directionY * deltaTime * 60;
    }

    if (!playerHitThisFrame && checkCollision(enemy, player)) {
      player.x = currentLevel.player.x;
      player.y = currentLevel.player.y;
      playerHitThisFrame = true;
    }
  });

  return playerHitThisFrame;
}