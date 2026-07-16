import { professional } from '../../data/lehEstetic'

export function ManagerHeader() {
  return (
    <header className="border-b border-ink-900/8 bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <span className="text-xs font-medium tracking-[0.2em] text-clay-500 uppercase">
            Painel de gestão · demonstração
          </span>
          <h1 className="font-display text-2xl font-semibold text-ink-900">{professional.name}</h1>
        </div>
        <a
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-900/15 px-4 py-2 text-sm font-medium text-ink-800 hover:border-clay-500 hover:text-clay-600"
        >
          ← Ver catálogo público
        </a>
      </div>
    </header>
  )
}
