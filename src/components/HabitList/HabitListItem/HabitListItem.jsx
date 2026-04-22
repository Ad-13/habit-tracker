import { getEnergyColour } from "../../../helpers/utils"
import BatteryBar from "./BatteryBar"
import CounterButton from './CounterButton'
import DeleteButton from './DeleteButton'

const HabitListItem = ({ habit, index, onIncrement, onDecrement, onDelete }) => {
  const { id, name, emoji, goal, count } = habit
  const ratio = goal > 0 ? Math.min(count / goal, 1) : 0
  const isComplete = ratio >= 1
  const colour = getEnergyColour(ratio)

  return (
    <li
      className="card-enter relative scanlines
                 rounded-(--radius-card)
                 bg-(--color-bg-card)
                 border transition-all duration-500
                 shadow-(--shadow-card)
                 overflow-hidden"
      style={{
        borderColor: isComplete ? `${colour}60` : 'var(--color-bg-border)',
        boxShadow: isComplete
          ? `var(--shadow-card), 0 0 24px ${colour}25`
          : 'var(--shadow-card)',
        animationDelay: `${index * 60}ms`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
        style={{ backgroundColor: colour, opacity: ratio > 0 ? 0.8 : 0.2 }}
      />

      <div className="p-4 flex flex-col gap-3">

        <div className="flex items-center gap-3">
          <span className="text-2xl select-none" aria-hidden>
            {emoji}
          </span>
          <h3
            className={`flex-1 font-sans font-semibold text-base
                          transition-all duration-300
                          ${isComplete
                ? 'neon-flicker'
                : 'text-text-primary'
              }`}
            style={isComplete ? { color: colour } : undefined}
          >
            {name}
            {isComplete && (
              <span className="ml-2 text-xs opacity-70">✓</span>
            )}
          </h3>
          <DeleteButton onClick={() => onDelete(id)} habitName={name} />
        </div>

        <BatteryBar count={count} goal={goal} />

        <div className="flex items-center gap-3 justify-between">

          <CounterButton
            onClick={() => onDecrement(id)}
            disabled={count === 0}
            colour="var(--color-neon-red)"
            ariaLabel={`Decrease ${name}`}
          >
            -
          </CounterButton>

          <div className="flex-1 text-center">
            <span
              className="font-display text-3xl font-bold
                          transition-colors duration-500"
              style={{ color: ratio > 0 ? colour : 'var(--color-text-muted)' }}
            >
              {count}
            </span>
            <span className="text-text-muted text-sm font-sans ml-1">
              / {goal}
            </span>
          </div>

          <CounterButton
            onClick={() => onIncrement(id)}
            disabled={isComplete}
            colour="var(--color-neon-cyan)"
            ariaLabel={`Increase ${name}`}
          >
            +
          </CounterButton>

        </div>
      </div>
    </li>
  )
}

export default HabitListItem
