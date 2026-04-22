import { getEnergyColour } from "../../../helpers/utils"

const BatteryBar = ({ count, goal }) => {
  const ratio = goal > 0 ? Math.min(count / goal, 1) : 0
  const colour = getEnergyColour(ratio)
  const percentage = Math.round(ratio * 100)
  const segments = Math.min(Math.max(goal, 4), 10)

  return (
    <div className="flex flex-col gap-1.5">
      {/* Segmented cells */}
      <div
        className="relative flex gap-1 h-3 rounded-full overflow-hidden
                   bg-(--color-bg-border)"
        role="progressbar"
        aria-valuenow={count}
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-label={`${count} of ${goal}`}
      >
        <div
          className={`absolute inset-y-0 left-0 transition-all duration-500
                      ${ratio >= 1 ? 'battery-fill battery-complete' : ''}`}
          style={{
            width: `${percentage}%`,
            backgroundColor: colour,
            boxShadow: `0 0 8px ${colour}`,
            transition: 'width 0.5s ease, background-color 0.5s ease',
          }}
        />
        {Array.from({ length: segments - 1 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-(--color-bg-card)/60 z-10"
            style={{ left: `${((i + 1) / segments) * 100}%` }}
          />
        ))}
      </div>
      <div className="flex">
        <span
          className="text-sm font-display tracking-wider"
          style={{ color: colour }}
        >
          {ratio >= 1 ? '⚡ CHARGED' : `${percentage}%`}
        </span>
      </div>
    </div>
  )
}

export default BatteryBar
