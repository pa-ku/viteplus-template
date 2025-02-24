export default function App() {
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-gradient-to-tl from-sky-800 to-sky-300">
        <h1 className="drop-shadow-white text-6xl font-bold text-white">
          VitePlus
        </h1>
        <ol className="flex flex-wrap gap-5 drop-shadow-xl">
          {[
            "TS",
            "React",
            "Tailwind",
            "Prettier",
            "Vitest",
            "Eslint",
            "Lucide",
          ].map((tech) => (
            <p
              className="z-10 w-34 rounded-xl border-2 border-white/50 bg-white/30 px-3 py-2 text-center text-xl text-white shadow-lg shadow-white/20 duration-300 hover:-translate-y-1"
              key={tech}
            >
              {tech}
            </p>
          ))}
        </ol>
      </main>
    </>
  );
}
