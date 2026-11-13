import { useEffect, useMemo, useSyncExternalStore } from "react";
import { actStartGame } from "./features/surf-play-page/act_start_game";
import { prodCanvasStartGameStore } from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import {
  PlayPageCanvasStartGame,
  type PlayPageCanvasStartGameActionCallbacks,
} from "./screens/PlayPageCanvasStartGame";
import { installProdCanvasStartGameTestBridge } from "./test/bridge";

export default function App() {
  const snapshot = useSyncExternalStore(
    prodCanvasStartGameStore.subscribe,
    prodCanvasStartGameStore.getSnapshot,
    prodCanvasStartGameStore.getSnapshot,
  );

  useEffect(
    () => installProdCanvasStartGameTestBridge(prodCanvasStartGameStore),
    [],
  );

  const actions = useMemo<PlayPageCanvasStartGameActionCallbacks>(
    () => ({
      "start-game-1": () => {
        actStartGame(prodCanvasStartGameStore);
      },
    }),
    [],
  );

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      <PlayPageCanvasStartGame
        actions={actions}
        applicationState={snapshot.states.STATE_APPLICATION_STATE}
        highScore={snapshot.states.STATE_HIGH_SCORE_STATE}
      />
    </div>
  );
}
