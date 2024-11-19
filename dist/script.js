import { createPlayer, movePlayer } from "./entities/player.js";
import { createEnemy, moveEnemy } from "./entities/enemy.js";
import { createWalls } from "./entities/walls.js";
import { createGoal, goalConditions } from "./entities/goal.js";
import { level1, level2, level3, level4 } from "./entities/levels.js";
// Canvas, HTML
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let levelStatus = document.getElementById("levels");
const restartBtn = document.getElementById("restartBtn");
const goalModal = document.getElementById("goalModal");
// levels
const levels = [level1, level2, level3, level4];
let currentLevelIndex = 0;
let currentLevel = levels[currentLevelIndex];
let player;
// "create" current level
function initializeLevel(level) {
    player = {
        x: level.player.x,
        y: level.player.y,
        width: level.player.width,
        height: level.player.height,
        speed: level.player.speed,
        color: level.player.color,
    };
    currentLevel = level;
}
// Render the level
function renderLevel(level) {
    createWalls(ctx, level.walls);
    createPlayer(ctx, player);
    createEnemy(ctx, level.enemy);
    createGoal(ctx, level.goal);
}
// Switch level
function switchLevel(newLevelIndex) {
    // End game if all levels are cleared
    if (newLevelIndex >= levels.length) {
        goalModal.style.display = "flex";
        return;
    }
    // Change current level
    currentLevelIndex = newLevelIndex;
    initializeLevel(levels[newLevelIndex]);
}
// Reload page if player restart
restartBtn.addEventListener("click", () => {
    location.reload();
});
// Timestamp
let lastTimestamp = 0;
// Keys for movement
const keysPressed = {};
// Move on keydown
window.addEventListener("keydown", (e) => {
    keysPressed[e.key] = true;
});
// Stop at keyup
window.addEventListener("keyup", (e) => {
    keysPressed[e.key] = false;
});
// GAMELOOP
function gameLoop(timestamp) {
    const deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderLevel(currentLevel);
    movePlayer(player, currentLevel.walls, deltaTime, keysPressed);
    moveEnemy(currentLevel.enemy, player, currentLevel, currentLevelIndex);
    const newLevelIndex = goalConditions(player, keysPressed, currentLevelIndex, levels, currentLevel);
    levelStatus.textContent = currentLevelIndex + 1 + " / " + levels.length;
    if (newLevelIndex !== currentLevelIndex) {
        switchLevel(newLevelIndex);
    }
    requestAnimationFrame(gameLoop);
}
initializeLevel(levels[currentLevelIndex]);
requestAnimationFrame(gameLoop);
