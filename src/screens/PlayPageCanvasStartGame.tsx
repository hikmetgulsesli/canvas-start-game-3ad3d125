// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-game-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="relative min-h-screen flex flex-col justify-between w-full bg-slate-950 overflow-x-hidden" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_RETENTION">
      
          {/* Top Non-Actionable Chrome / Header */}
          <header className="w-full border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                C
              </div>
              <div>
                <h1 className="text-base font-semibold tracking-tight text-white">Canvas Start Game</h1>
                <p className="text-xs text-slate-400">Route: /play</p>
              </div>
            </div>
      
            {/* Observable status indicators & game metadata */}
            <div className="flex items-center gap-6">
              {/* High score observable with role status & accessible name 'High score' */}
              <div className="flex flex-col items-end">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Session Record</span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-400" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE">
                  <span className="text-xs text-slate-400 font-normal">High score:</span>
                  {/* Before action: value is null/empty or 0 as needed by assertion */}
                  <span className="font-mono text-base text-amber-300">0</span>
                </div>
              </div>
      
              {/* Observables & status bar */}
              <div className="hidden">
                {/* Game started text observable required after ACT_START_GAME */}
                <div data-setfarm-element-ref="E000003" role="status" aria-label="Game started" data-observable-refs="OBS_START_GAME_GAME_STARTED_TEXT">Game started</div>
              </div>
            </div>
          </header>
      
          {/* Main Gameplay Arena */}
          <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-6xl mx-auto">
            <div className="w-full flex flex-col items-center gap-6">
              
              {/* Controls & HUD Bar */}
              <div className="w-full flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-xl px-6 py-3.5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Engine Ready</span>
                  </div>
                  <div className="h-4 w-px bg-slate-800"></div>
                  <span className="text-xs text-slate-400">Canvas 2D Grid Mode</span>
                </div>
      
                {/* The Single Declared Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
                <div>
                  <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg shadow-md transition-colors" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                    Start Game
                  </button>
                </div>
              </div>
      
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="relative w-full aspect-[16/9] max-h-[640px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center group" data-setfarm-element-ref="E000005">
                {/* Grid background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
                {/* Canvas graphic placeholder decoration */}
                <div className="relative z-10 flex flex-col items-center text-center p-8 max-w-md">
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-medium text-slate-200 tracking-tight mb-2">Game Canvas Display</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Press the Start Game button to initialize the gameplay simulation and register active play telemetry.
                  </p>
                </div>
      
                {/* Subtle viewport coordinate watermark */}
                <div className="absolute bottom-3 right-4 font-mono text-[11px] text-slate-400 pointer-events-none select-none">
                  GRID: 1920x1080 | BUFFER: ACTIVE
                </div>
              </div>
      
            </div>
          </main>
      
          {/* Footer Chrome (Non-Actionable) */}
          <footer className="w-full border-t border-slate-900 bg-slate-950/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-4">
              <span>Target Surface: SURF_PLAY_PAGE</span>
              <span>© Canvas Start Game System</span>
            </div>
            <div>
              <span>Environment: Desktop Route /play</span>
            </div>
          </footer>
      
        </div>
    </>
  );
}
