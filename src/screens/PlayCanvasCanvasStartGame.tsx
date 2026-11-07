// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Canvas - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayCanvasCanvasStartGameActionId = "start-1";

export interface PlayCanvasCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayCanvasCanvasStartGameActionCallbacks = NonNullable<PlayCanvasCanvasStartGameProps["actions"]>;

export function PlayCanvasCanvasStartGame({ actions }: PlayCanvasCanvasStartGameProps) {
  return (
    <>
      {/* Route Root / Play Canvas Surface */}
        <main data-surface-id="SURF_PLAY_CANVAS" className="flex-1 flex flex-col justify-between p-6 max-w-7xl mx-auto w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE">
          {/* Header chrome (purely decorative) */}
          <header className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center font-black tracking-wider text-white shadow-lg shadow-cyan-500/20">
                PC
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-white">Play Canvas</h1>
                <p className="text-xs text-slate-400">Canvas Start Game System</p>
              </div>
            </div>
      
            {/* Observables Bar: High score & Game status */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">High Score</span>
                <div className="text-sm font-mono font-bold text-cyan-400" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE">0</div>
              </div>
      
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Status</span>
                <div className="text-sm font-medium text-emerald-400" data-setfarm-element-ref="E000003" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_STATUS">Ready to play</div>
              </div>
            </div>
          </header>
      
          {/* Canvas Simulation & Game Area */}
          <div className="my-6 flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-[16/9] bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
              {/* Canvas Grid Background Styling */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
              
              {/* Canvas Decorative Game Elements */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Simulation Ready
                </div>
      
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Start The Challenge
                  </h2>
                  <p className="text-sm text-slate-400">
                    Press the start control below to initialize the interactive viewport, launch the game loop, and track your high score.
                  </p>
                </div>
      
                {/* Single Authorized Physical Control Slot */}
                <div className="pt-2">
                  <button data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/25 transition-colors duration-150 transform active:scale-95 cursor-pointer" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" type="button" data-action-id="start-1" onClick={actions?.["start-1"]}>Start</button>
                </div>
              </div>
      
              {/* Canvas Frame Decorative Metadata */}
              <div className="absolute bottom-4 left-6 text-[11px] font-mono text-slate-500">
                Canvas Viewport: 1920x1080 (Scaled)
              </div>
              <div className="absolute bottom-4 right-6 text-[11px] font-mono text-slate-500">
                Target Route: /play
              </div>
            </div>
          </div>
      
          {/* Footer Chrome (Purely decorative) */}
          <footer className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
            <div>Play Canvas Engine © 2025</div>
            <div>Session Active</div>
          </footer>
        </main>
    </>
  );
}
