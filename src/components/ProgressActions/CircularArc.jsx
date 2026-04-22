const CircularArc = ({ ratio, colour }) => {
  const size = 140
  const stroke = 10
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - ratio)

  return (
    <svg width={size} height={size} className="-rotate-90">
      {/* Track */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke="var(--color-bg-border)"
        strokeWidth={stroke}
      />
      {/* Fill */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={colour}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.6s ease' }}
      />
    </svg>
  )
}

export default CircularArc
