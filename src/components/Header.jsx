const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-bg-border)
                       bg-(--color-bg-base)/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-4
                      flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-button
                          bg-accent-dim
                          border border-(--color-accent)/30
                          flex items-center justify-center text-lg
                          shadow-(--shadow-glow-cyan)">
            ⚡
          </div>
          <span className="font-display
                           text-xl font-bold tracking-wider
                           text-text-primary">
            Power<span className="text-(--color-accent)">Log</span>
          </span>
        </div>

        <p className="hidden sm:block text-xs text-text-muted
                      font-sans tracking-widest uppercase">
          Charge your habits
        </p>

      </div>
    </header>
  )
}

export default Header
