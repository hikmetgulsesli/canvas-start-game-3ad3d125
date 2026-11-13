import { actStartGame } from "../features/surf-play-page/act_start_game";
import type { ProdCanvasStartGameStore } from "../features/prod-canvas-start-game/prod-canvas-start-game.store";
import {
  START_GAME_ACTION_REF,
  type ProdCanvasStartGameSnapshot,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export interface ProdCanvasStartGameTestBridge {
  getState(): ProdCanvasStartGameSnapshot;
  invokeAction(
    actionRef: string,
    input?: Record<string, unknown>,
  ): ProdCanvasStartGameSnapshot;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: ProdCanvasStartGameTestBridge;
    __SETFARM_SCENARIO_MODE__?: "manual";
  }
}

export function installProdCanvasStartGameTestBridge(
  store: ProdCanvasStartGameStore,
): () => void {
  const bridge: ProdCanvasStartGameTestBridge = {
    getState: () => store.getSnapshot(),
    invokeAction: (actionRef) => {
      if (actionRef !== START_GAME_ACTION_REF) {
        throw new Error(`Unsupported action: ${actionRef}`);
      }
      return actStartGame(store);
    },
  };

  window.__SETFARM_TEST_BRIDGE__ = bridge;
  window.__SETFARM_SCENARIO_MODE__ = "manual";

  return () => {
    if (window.__SETFARM_TEST_BRIDGE__ === bridge) {
      delete window.__SETFARM_TEST_BRIDGE__;
    }
    delete window.__SETFARM_SCENARIO_MODE__;
  };
}
