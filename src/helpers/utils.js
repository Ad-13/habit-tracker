export function getEnergyColour(ratio) {
  if (ratio >= 1) return 'var(--color-energy-full)'
  if (ratio >= 0.6) return 'var(--color-energy-high)'
  if (ratio >= 0.3) return 'var(--color-energy-mid)'
  return 'var(--color-energy-low)'
}
