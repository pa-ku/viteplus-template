import { Copy } from "lucide-react";
import { CopyCheck } from "lucide-react";
import { useState } from "react";
import viteimg from "/vite.webp";

export default function App() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-gradient-to-tl from-sky-800 to-sky-300">
        <h1 className="drop-shadow-white flex items-center justify-center gap-4 text-6xl font-bold text-white">
          VitePlus
        </h1>
        <p className="border-sky-900 flex items-center justify-center gap-2 rounded-lg border-2 bg-sky-800/90 px-3 py-2 text-sky-300">
          pnpm dlx degit pa-ku/viteplus-template.git app-name
          <button
            onClick={() => {
              navigator.clipboard
                .writeText(
                  "pnpm dlx degit pa-ku/viteplus-template.git app-name",
                )
                .then(() => {
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                })
                .catch((err) => {
                  console.error("Error al copiar al portapapeles: ", err);
                });
            }}
            className="z-10 my-auto cursor-pointer"
          >
            {copied ? (
              <CopyCheck className="size-5" />
            ) : (
              <Copy className="size-5" />
            )}
          </button>
        </p>
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
