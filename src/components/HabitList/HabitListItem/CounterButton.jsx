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
      '--btn-colour': colour,
    }}
  >
    {children}
  </button>
)

export default CounterButton
