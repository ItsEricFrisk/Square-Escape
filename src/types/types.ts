export interface Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export interface Player extends Entity {
  speed: number;
}

export interface Enemy extends Entity {
  speed: number;
  movementRangeLeft: number;
  movementRangeRight: number;
  movementRangeTop: number;
  movementRangeBottom: number;
  movingHorizontal: boolean;
  _directionX?: number;
  _directionY?: number;
}

export interface Wall extends Entity {}
export interface Goal extends Entity {}

export interface Level {
  player: Player;
  enemy: Enemy[];
  walls: Wall[];
  goal: Goal;
}
