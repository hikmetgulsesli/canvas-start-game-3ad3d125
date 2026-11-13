import type { ProdCanvasStartGameStore } from "../prod-canvas-start-game/prod-canvas-start-game.store";
import type { ProdCanvasStartGameSnapshot } from "../prod-canvas-start-game/prod-canvas-start-game.types";

export function actStartGame(
  store: ProdCanvasStartGameStore,
): ProdCanvasStartGameSnapshot {
  return store.startGame();
}
