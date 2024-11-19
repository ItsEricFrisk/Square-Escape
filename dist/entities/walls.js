export function createWalls(ctx, walls) {
    walls.forEach((wall) => {
        ctx.fillStyle = wall.color;
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });
}
