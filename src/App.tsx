export default function App() {
  return (<>
    <ol className="w-full bg-gradient-to-tl from-sky-800 to-sky-300  h-screen flex flex-wrap items-center gap-5 justify-center ">
      {['Pnpm', 'React', 'Tailwind', 'Prettier', 'Vitest', 'Eslint', 'Lucide'].map(tech => (
        <p className="text-3xl w-38 z-10 shadow-lg text-center shadow-white/30 hover:scale-110 duration-300 bg-white/70  border-2 border-white rounded-xl px-3 py-2 text-sky-700 " key={tech}>
          {tech}
        </p>
      ))}
    </ol>
  </>
  )
}
