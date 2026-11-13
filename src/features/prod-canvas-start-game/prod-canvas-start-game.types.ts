export const START_GAME_ACTION_REF = "ACT_START_GAME" as const;
export const HIGH_SCORE_STORAGE_KEY =
  "setfarm.canvas_start_game.high_score_local_storage.v1" as const;

export type ApplicationState = "ready" | "playing";

export interface HighScoreRecord {
  current_value: number;
}

export interface ProdCanvasStartGameStates {
  readonly STATE_APPLICATION_STATE: ApplicationState;
  readonly STATE_HIGH_SCORE_STATE: number | null;
}

export interface ProdCanvasStartGameSnapshot {
  readonly states: ProdCanvasStartGameStates;
}
