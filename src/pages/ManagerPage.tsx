import { useEffect } from 'react'
import { ManagerHeader } from '../components/manager/ManagerHeader'
import { OverviewStats } from '../components/manager/OverviewStats'
import { TreatmentsTable } from '../components/manager/TreatmentsTable'
import { LeadsList } from '../components/manager/LeadsList'
import { Footer } from '../components/layout/Footer'

export function ManagerPage() {
  useEffect(() => {
    document.title = 'Painel de Gestão (demonstração) — Leh Estetic'
  }, [])

  return (
    <>
      <ManagerHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8">
        <div className="rounded-2xl bg-clay-100/60 p-4 text-sm text-clay-600">
          Protótipo interno de gerenciamento — não conectado a um banco de dados real. Os dados de
          "Tratamentos" vêm do catálogo público; as "Solicitações" são salvas apenas neste
          navegador, para fins de demonstração.
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">Visão geral</h2>
          <OverviewStats />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">Tratamentos do catálogo</h2>
          <TreatmentsTable />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-semibold text-ink-900">Solicitações recebidas</h2>
          <LeadsList />
        </section>
      </main>
      <Footer />
    </>
  )
}
