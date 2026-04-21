const DeleteButton = ({ onClick, habitName }) => (
  <button
    onClick={onClick}
    aria-label={`Delete ${habitName}`}
    title="Remove habit"
    className="w-7 h-7 rounded-lg flex items-center justify-center
               text-text-muted text-sm
               hover:bg-(--color-neon-red)/10
               hover:text-(--color-neon-red)
               transition-colors duration-200"
  >
    ✕
  </button>
)

export default DeleteButton
