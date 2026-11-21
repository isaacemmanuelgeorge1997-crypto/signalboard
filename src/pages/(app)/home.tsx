import { useAuthProfileReady } from 'deepspace'
import { APP_NAME } from '../../constants'

const actions = [
  {
    number: '01',
    title: 'Collect research',
    description: 'Save a source or claim to investigate.',
    link: '/items',
    linkText: 'Go to items',
  },
  {
    number: '02',
    title: 'Build the brief',
    description: 'Develop your research into a shared document.',
    link: '/documents',
    linkText: 'Open documents',
  },
  {
    number: '03',
    title: 'Ask the assistant',
    description: 'Get an AI summary or explore a research question.',
    link: '/assistant',
    linkText: 'Open assistant',
  },
]

export default function HomePage() {
  const { isSignedIn, user } = useAuthProfileReady({ requireUser: true })

  return (
    <main className="min-h-full bg-zinc-950 px-6 py-12 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
          Collaborative research workspace
        </p>

        <div className="mt-4 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {APP_NAME}
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Turn scattered sources and claims into a clear, collaborative
            research brief.
          </p>
          {isSignedIn && user && (
            <p className="mt-3 text-sm text-zinc-400">
              Welcome, {user.name ?? user.email}.
            </p>
          )}
        </div>

        <section
          aria-label="Research workflow"
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {actions.map((action) => (
            <article
              key={action.number}
              className="flex min-h-56 flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <p className="text-sm text-sky-300">{action.number}</p>
              <h2 className="mt-5 text-xl font-semibold">{action.title}</h2>
              <p className="mt-2 flex-1 leading-6 text-zinc-400">
                {action.description}
              </p>
              <a
                className="mt-6 inline-flex w-fit rounded-lg bg-sky-300 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-sky-200"
                href={action.link}
              >
                {action.linkText} →
              </a>
            </article>
          ))}
        </section>

        <p className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          Keep evidence and open questions visible as your research develops.
        </p>
      </div>
    </main>
  )
}
