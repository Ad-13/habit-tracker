export function getEnergyColour(ratio) {
  if (ratio >= 1) return 'var(--color-energy-full)'
  if (ratio >= 0.6) return 'var(--color-energy-high)'
  if (ratio >= 0.3) return 'var(--color-energy-mid)'
  return 'var(--color-energy-low)'
}

export function getLabel(ratio) {
  if (ratio >= 1) return 'ALL CHARGED'
  if (ratio >= 0.6) return 'NEARLY THERE'
  if (ratio >= 0.3) return 'CHARGING...'
  if (ratio > 0) return 'LOW POWER'
  return 'UNPOWERED'
}
