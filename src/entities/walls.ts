import {Wall} from "../types/types.js"

export function createWalls(ctx: CanvasRenderingContext2D, walls: Wall[]): void {
walls.forEach((wall) => {
    ctx.fillStyle = wall.color
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height)
})
}