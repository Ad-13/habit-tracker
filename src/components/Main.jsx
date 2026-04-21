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

  const handleIncrement = id =>
    setHabits(prev =>
      prev.map(h =>
        h.id === id && h.count < h.goal
          ? { ...h, count: h.count + 1 }
          : h
      )
    )

  const handleDecrement = id =>
    setHabits(prev =>
      prev.map(h =>
        h.id === id && h.count > 0
          ? { ...h, count: h.count - 1 }
          : h
      )
    )

  const handleDelete = id => setHabits(prev => prev.filter(h => h.id !== id))

  useEffect(() => {
    saveHabits(habits)
  }, [habits])

  return (
    <main className="flex-1 max-w-3xl w-full mx-auto px-4 md:px-6 py-8 flex flex-col gap-8">

      <HabitList
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />


      <HabitForm onAdd={handleAddHabit} />
    </main>
  )
}

export default Main
