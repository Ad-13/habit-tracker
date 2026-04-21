const CounterButton = ({ onClick, disabled, colour, ariaLabel, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className="counter-btn
               w-10 h-10 rounded-button
               border flex items-center justify-center
               text-xl font-bold
               disabled:opacity-25 disabled:cursor-not-allowed
               transition-all duration-200"
    style={{
      '--hover-colour':  colour,
      borderColor:       disabled ? `${colour}40`              : 'var(--color-bg-border)',
      color:             disabled ? colour                      : 'var(--color-text-muted)',
      backgroundColor:   disabled ? `${colour}10`              : 'transparent',
    }}
  >
    {children}
  </button>
)

export default CounterButton
