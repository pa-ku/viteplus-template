import { IconBrandGithub, IconCopy, IconCopyCheck } from "@tabler/icons-react"
import { useState } from "react"
export default function VitePlus() {
  const stack = [
    { label: "TS", path: "https://www.typescriptlang.org/" },
    { label: "React", path: "https://react.dev/" },
    { label: "Tailwind", path: "https://tailwindcss.com/" },
    { label: "Prettier", path: "https://prettier.io/" },
    { label: "Vitest", path: "https://vitest.dev/" },
    { label: "Eslint", path: "" },
    { label: "TablerIcons", path: "https://tabler.io/icons" },
  ]

  const usefulPkgs = [
    { label: "React Query", pnpm: "pnpm i @tanstack/react-query" },
    { label: "Axios", pnpm: "pnpm i axios" },
    { label: "React Router", pnpm: "pnpm i react-router" },
  ]
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-gradient-to-tl from-sky-800 to-sky-300">
        <section className="flex w-full flex-col items-center justify-center gap-10">
          <h1 className="drop-shadow-white flex items-center justify-center gap-4 text-6xl font-bold text-white">
            VitePlus
          </h1>
          <span className="flex gap-2">
            <a
              href={"https://github.com/pa-ku/viteplus-template"}
              target="_Blank"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-sky-900 bg-sky-800/90 px-3 py-2 text-sky-300"
            >
              <IconBrandGithub size={24} />
            </a>

            <CopyButton
              textToCopy={"pnpm dlx degit pa-ku/viteplus-template.git app-name"}
            ></CopyButton>
          </span>
          <ul className="flex flex-wrap gap-5 drop-shadow-xl">
            {stack.map(({ label, path }) => (
              <a
                className="z-10 w-42 cursor-pointer rounded-xl border-2 border-white/50 bg-white/30 px-3 py-2 text-center text-xl text-white shadow-lg shadow-white/20 duration-300 hover:-translate-y-1"
                key={label}
                target="_Blank"
                href={path}
              >
                {label}
              </a>
            ))}
          </ul>
        </section>

        <section className="flex flex-col items-center gap-5">
          <h2 className="drop-shadow-white flex items-center justify-center gap-4 pt-10 text-3xl font-bold text-white">
            Relative Imports
          </h2>
          <p className="text-sky-200">
            Relative paths allow importing files without using long and
            repetitive routes
          </p>
          <p>
            Aliases are configured in tsconfig.app.json and vite.config.json
          </p>
          <div>
            <span className="text-sky-200">From</span>
            <p className="flex w-fit items-center justify-center gap-2 rounded-lg border-2 border-sky-900 bg-sky-800/90 px-3 py-2 text-sky-300">
              import Button from ../../components/Button
            </p>
          </div>
          <div>
            <span className="text-sky-200">To</span>
            <p className="flex w-fit items-center justify-center gap-2 rounded-lg border-2 border-sky-900 bg-sky-800/90 px-3 py-2 text-sky-300">
              import Button from @/components/ui/Button
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="drop-shadow-white flex items-center justify-center gap-4 pt-10 text-3xl font-bold text-white">
            More Useful packages
          </h2>

          <ul className="flex flex-wrap gap-5 drop-shadow-xl">
            {usefulPkgs.map(({ label, pnpm }) => (
              <div className="text-center text-sky-200" key={label}>
                <p className="pb-3 font-bold">{label}</p>
                <CopyButton textToCopy={pnpm}></CopyButton>
              </div>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border-2 border-sky-900 bg-sky-800/90 px-3 py-2 text-sky-300">
      <p>{textToCopy}</p>
      <button
        onClick={() => {
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
              setCopied(true)
              setTimeout(() => {
                setCopied(false)
              }, 2000)
            })
            .catch((err) => {
              console.error("Error al copiar al portapapeles: ", err)
            })
        }}
        className="z-10 my-auto cursor-pointer"
      >
        {copied ? <IconCopyCheck size={20} /> : <IconCopy size={20} />}
      </button>
    </div>
  )
}
