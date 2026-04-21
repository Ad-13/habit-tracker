import EmptyList from './EmptyList.jsx'
import HabitListItem from './HabitListItem.jsx'

const HabitList = ({ habits, onIncrement, onDecrement, onDelete }) => {

  if (habits.length === 0) return <EmptyList />

  return (
    <ul className="flex flex-col gap-4" role="list" aria-label="Your habits">
      {habits.map((habit, index) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          index={index}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default HabitList
