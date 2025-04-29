import { Player, Level } from "../../types/types.ts";
import { createPlayer, movePlayer } from "../../entities/player.ts";
import { createEnemy, moveEnemy } from "../../entities/enemy.ts";
import { createWalls } from "../../entities/walls.ts";
import { createGoal, goalConditions } from "../../entities/goal.ts";
import { level1, level2, level3, level4 } from "../../entities/levels.ts";

export function startGame(
    canvas: HTMLCanvasElement,
    levelStatus: HTMLSpanElement,
    goalModal: HTMLDivElement,
    restartBtn: HTMLButtonElement,
    replayBtn: HTMLButtonElement,
    attemptsHolder: HTMLSpanElement
  ) {
    const ctx = canvas.getContext("2d")!;
    const levels: Level[] = [level1, level2, level3, level4];
    let currentLevelIndex = 0;
    let currentLevel = levels[currentLevelIndex];
    let player: Player;
    let attempts: number = 0;
  
    function initializeLevel(level: Level): void {
      player = { ...level.player, speed: 180 };
      currentLevel = level;
    }
  
    function renderLevel(level: Level): void {
      createWalls(ctx, level.walls);
      createPlayer(ctx, player);
      createEnemy(ctx, level.enemy);
      createGoal(ctx, level.goal);
    }
  
    function switchLevel(newLevelIndex: number): void {
      if (newLevelIndex >= levels.length) {
        goalModal.style.display = "flex";
        return;
      }
      currentLevelIndex = newLevelIndex;
      initializeLevel(levels[newLevelIndex]);
    }
  
    restartBtn.addEventListener("click", () => {
      location.reload();
    });

    replayBtn.addEventListener("click", () => {
      location.reload()
    })
  
    const keysPressed: { [key: string]: boolean } = {};
    window.addEventListener("keydown", (e) => (keysPressed[e.key] = true));
    window.addEventListener("keyup", (e) => (keysPressed[e.key] = false));
  
    let lastTimestamp = 0;
  
    function gameLoop(timestamp: number) {
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      renderLevel(currentLevel);
      movePlayer(player, currentLevel.walls, deltaTime, keysPressed);
  
      const playerHitThisFrame = moveEnemy(currentLevel.enemy, player, currentLevel, deltaTime);
  
      if (playerHitThisFrame) {
        attempts += 1;
        attemptsHolder.innerHTML = attempts.toString();
      }
  
      const newLevelIndex = goalConditions(
        player,
        keysPressed,
        currentLevelIndex,
        levels,
        currentLevel
      );
  
      levelStatus.textContent = `${currentLevelIndex + 1} / ${levels.length}`;
  
      if (newLevelIndex !== currentLevelIndex) {
        switchLevel(newLevelIndex);
      }
  
      requestAnimationFrame(gameLoop);
    }
  
    initializeLevel(currentLevel);
    requestAnimationFrame(gameLoop);
  }
  