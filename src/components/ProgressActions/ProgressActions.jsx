import { getEnergyColour, getLabel } from "../../helpers/utils"
import CircularArc from "./CircularArc"

const ProgressActions = ({ completed, total, onResetAll }) => {
  const ratio = total > 0 ? completed / total : 0
  const colour = getEnergyColour(ratio)
  const label = getLabel(ratio)
  const percentage = Math.round(ratio * 100)

  return (
    <section
      aria-label="Overall progress"
      className="relative scanlines rounded-(--radius-card)
                 bg-(--color-bg-card)
                 border border-(--color-bg-border)
                 p-6 flex flex-col sm:flex-row
                 items-center gap-6
                 shadow-(--shadow-card)"
    >

      <div className="relative shrink-0">
        <CircularArc ratio={ratio} colour={colour} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-display text-2xl font-bold"
            style={{ color: colour, transition: 'color 0.6s ease' }}
          >
            {percentage}%
          </span>
        </div>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <p
          className="font-display text-xs tracking-[0.25em] mb-1"
          style={{ color: colour }}
        >
          {label}
        </p>
        <p className="text-text-primary text-3xl font-bold font-sans">
          {completed}
          <span className="text-text-muted text-lg font-normal">
            /{total}
          </span>
        </p>
        <p className="text-text-muted text-sm mt-1">
          habits completed today
        </p>
      </div>

      <button
        onClick={onResetAll}
        disabled={completed === 0 && total > 0
          ? false
          : !completed && !total}
        className="shrink-0 px-4 py-2 rounded-button
                   bg-(--color-neon-red)/10
                   border border-(--color-neon-red)/30
                   text-(--color-neon-red)/70
                   text-xs font-sans font-semibold tracking-wider uppercase
                   hover:bg-(--color-neon-red)/25
                   hover:border-(--color-neon-red)/60
                   hover:text-(--color-neon-red)
                   transition-all duration-200
                   disabled:opacity-30 disabled:cursor-not-allowed"
        title="Reset all habit counters to zero"
      >
        Reset Day
      </button>

    </section>
  )
}

export default ProgressActions
