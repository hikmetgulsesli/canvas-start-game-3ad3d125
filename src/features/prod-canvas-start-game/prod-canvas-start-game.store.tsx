import {
  highScoreRepository,
  type HighScoreRepository,
} from "./prod-canvas-start-game.repo";
import type { ProdCanvasStartGameSnapshot } from "./prod-canvas-start-game.types";

type StoreListener = () => void;

export class ProdCanvasStartGameStore {
  private snapshot: ProdCanvasStartGameSnapshot;
  private readonly listeners = new Set<StoreListener>();

  constructor(
    private readonly repository: HighScoreRepository = highScoreRepository,
  ) {
    this.snapshot = {
      states: {
        STATE_APPLICATION_STATE: "ready",
        STATE_HIGH_SCORE_STATE: this.repository.loadHighScore(),
      },
    };
  }

  getSnapshot = (): ProdCanvasStartGameSnapshot => this.snapshot;

  subscribe = (listener: StoreListener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  startGame(): ProdCanvasStartGameSnapshot {
    this.repository.saveHighScore(0);
    this.snapshot = {
      states: {
        STATE_APPLICATION_STATE: "playing",
        STATE_HIGH_SCORE_STATE: 0,
      },
    };
    this.listeners.forEach((listener) => listener());
    return this.snapshot;
  }
}

export const prodCanvasStartGameStore = new ProdCanvasStartGameStore();
