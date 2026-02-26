"use client";

import { PlasmaVisualizer } from "@pipecat-ai/voice-ui-kit/webgl";

export default function PlasmaCard() {
  return (
    <div className="w-full max-w-[440px] rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="text-sm font-medium text-white/80">Not Connected</div>
        <div className="text-xs text-white/50">Pipecat</div>
      </div>

      <div className="px-6 pb-6 pt-4">
        {/* Ring container */}
        <div className="mx-auto w-[300px] h-[300px] rounded-full border border-white/10 bg-black/30 overflow-hidden relative">
          {/* Plasma fills the container */}
          <PlasmaVisualizer />
          {/* Optional overlay hint */}
          <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]" />
        </div>

        <div className="mt-5 text-center">
          <div className="text-xl font-semibold tracking-tight">Voice Assistant</div>
          <div className="mt-1 text-sm text-white/60">Plasma Visualizer (WebGL)</div>
        </div>

        <div className="mt-6 flex gap-3 justify-center">
          <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
            Start
          </button>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/50" disabled>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
