import { useState } from 'react'
import { EMOJI_OPTIONS } from '../helpers/constants'

export default function HabitForm({ onAdd }) {
  const [name,  setName]  = useState('')
  const [emoji, setEmoji] = useState('🎯')
  const [goal,  setGoal]  = useState(1)
  const [open,  setOpen]  = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) return
    onAdd({ name: trimmedName, emoji, goal: Math.max(1, goal) })
    setName('')
    setGoal(1)
    setOpen(false)
  }

  return (
    <section>
      {/* Toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-full py-3 rounded-(--radius-card)
                     border border-dashed border-(--color-bg-border)
                     text-text-muted text-sm font-sans
                     hover:border-(--color-accent)/50
                     hover:text-(--color-accent)
                     transition-colors duration-200
                     flex items-center justify-center gap-2"
        >
          <span className="text-lg">+</span>
          Add new habit
        </button>
      )}

      {/* Form */}
      {open && (
        <form
          onSubmit={handleSubmit}
          className="card-enter rounded-(--radius-card)
                     bg-(--color-bg-card)
                     border border-(--color-bg-border)
                     p-5 flex flex-col gap-4
                     shadow-(--shadow-card)"
        >
          <p className="font-display
                        text-xs tracking-[0.2em] text-(--color-accent) uppercase">
            New habit
          </p>

          {/* Emoji picker + Name */}
          <div className="flex gap-3">

            {/* Emoji select */}
            <select
              value={emoji}
              onChange={e => setEmoji(e.target.value)}
              className="w-16 rounded-button
                         bg-(--color-bg-raised)
                         border border-(--color-bg-border)
                         text-text-primary text-xl
                         text-center
                         focus:border-(--color-accent)/60
                         transition-colors duration-200 cursor-pointer"
            >
              {EMOJI_OPTIONS.map(e => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>

            {/* Name input */}
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Habit name…"
              maxLength={40}
              required
              autoFocus
              className="flex-1 rounded-button
                         bg-(--color-bg-raised)
                         border border-(--color-bg-border)
                         text-text-primary
                         placeholder:text-text-muted
                         px-4 py-2.5 text-sm font-sans
                         focus:border-(--color-accent)/60
                         transition-colors duration-200"
            />
          </div>

          {/* Goal */}
          <div className="flex items-center gap-4">
            <label className="text-text-muted text-xs
                              font-sans uppercase tracking-wider shrink-0">
              Daily target
            </label>
            <input
              type="number"
              value={goal}
              onChange={e => setGoal(Number(e.target.value))}
              min={1}
              max={999}
              className="w-24 rounded-button
                         bg-(--color-bg-raised)
                         border border-(--color-bg-border)
                         text-text-primary text-center
                         px-3 py-2 text-sm font-sans
                         focus:border-(--color-accent)/60
                         transition-colors duration-200"
            />
            <span className="text-text-muted text-xs">
              times / day
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-1">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-button
                         border border-(--color-bg-border)
                         text-text-muted text-sm font-sans
                         hover:text-text-primary
                         hover:border-text-muted/40
                         transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-button
                         bg-accent-dim
                         border border-(--color-accent)/40
                         text-(--color-accent) text-sm font-sans font-semibold
                         hover:bg-(--color-accent)/20
                         hover:border-(--color-accent)/70
                         shadow-(--shadow-glow-cyan)
                         transition-all duration-200"
            >
              Add Habit ⚡
            </button>
          </div>
        </form>
      )}

    </section>
  )
}
