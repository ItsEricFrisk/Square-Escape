import {Entity} from "../types/types.js"

export function checkCollision(a: Entity, b: Entity ): boolean {
    return a.x < b.x + b.width &&  
    a.x + a.width > b.x && 
    a.y < b.y + b.height && 
    a.y + a.height > b.y;
}
