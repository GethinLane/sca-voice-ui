import PlasmaCard from "@/components/PlasmaCard";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-14">
      <div className="w-full flex flex-col items-center gap-8">
        <PlasmaCard />
        <div className="text-xs text-white/40 max-w-[520px] text-center leading-relaxed">
          This is the real Pipecat Voice UI Kit Plasma Visualizer running in a Next.js app.
          Next step is wiring your actual Pipecat connection so it shows Connected/Thinking states.
        </div>
      </div>
    </main>
  );
}
