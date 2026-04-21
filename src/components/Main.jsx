import { useEffect, useState } from "react"
import { loadHabits, saveHabits } from "../helpers/storage"
import { DEFAULT_HABITS } from "../helpers/constants"

const Main = () => {
  const [habits, setHabits] = useState(() => {
    const stored = loadHabits()
    return stored.length > 0 ? stored : DEFAULT_HABITS
  })

  const handleAddHabit = newHabit => setHabits(prev => [
    ...prev,
    { ...newHabit, id: Date.now(), count: 0 },
  ])


  useEffect(() => {
    saveHabits(habits)
  }, [habits])

  return (
    <main className="flex-1 max-w-3xl w-full mx-auto px-4 md:px-6 py-8 flex flex-col gap-8">
      <HabitForm onAdd={handleAddHabit} />
    </main>
  )
}

export default Main
