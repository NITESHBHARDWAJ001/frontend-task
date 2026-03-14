import FeatureCard from '../components/FeatureCard'
import MainLayout from '../layouts/MainLayout'

const features = [
  {
    title: 'React + Vite',
    description: 'Fast development with modern tooling and HMR support.',
  },
  {
    title: 'Tailwind CSS v3',
    description: 'Utility-first styling configured and ready for components.',
  },
  {
    title: 'Scalable Structure',
    description: 'Folders prepared for pages, layouts, hooks, and utilities.',
  },
]

export default function HomePage() {
  return (
    <MainLayout>
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
          Project Ready
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          React + Tailwind 3 Starter
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Your workspace now has a clean structure for building features quickly.
          Start by editing components in src/components and pages in src/pages.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </MainLayout>
  )
}
