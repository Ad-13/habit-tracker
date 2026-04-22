const DeleteButton = ({ onClick, habitName }) => (
  <button
    onClick={onClick}
    aria-label={`Delete ${habitName}`}
    title="Remove habit"
    className="w-7 h-7 rounded-lg flex items-center justify-center
               text-sm transition-all duration-200
               bg-(--color-neon-red)/10
               text-(--color-neon-red)/60
               border border-(--color-neon-red)/20
               hover:bg-(--color-neon-red)/25
               hover:text-(--color-neon-red)
               hover:border-(--color-neon-red)/50"
  >
    ✕
  </button>
)

export default DeleteButton
