import {
  HIGH_SCORE_STORAGE_KEY,
  type HighScoreRecord,
} from "./prod-canvas-start-game.types";

export interface HighScoreRepository {
  loadHighScore(): number | null;
  saveHighScore(value: number): void;
}

function getBrowserStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export class LocalStorageHighScoreRepository implements HighScoreRepository {
  loadHighScore(): number | null {
    const storage = getBrowserStorage();
    if (storage === null) {
      return null;
    }

    try {
      const serialized = storage.getItem(HIGH_SCORE_STORAGE_KEY);
      if (serialized === null) {
        return null;
      }

      const parsed: unknown = JSON.parse(serialized);
      if (typeof parsed !== "object" || parsed === null) {
        return null;
      }

      const currentValue = (parsed as Partial<HighScoreRecord>).current_value;
      return typeof currentValue === "number" && Number.isFinite(currentValue)
        ? currentValue
        : null;
    } catch {
      return null;
    }
  }

  saveHighScore(value: number): void {
    const storage = getBrowserStorage();
    if (storage === null) {
      return;
    }

    const record: HighScoreRecord = { current_value: value };
    storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(record));
  }
}

export const highScoreRepository = new LocalStorageHighScoreRepository();
