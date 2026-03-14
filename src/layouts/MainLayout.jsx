export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
