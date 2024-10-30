import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-600 mb-4">Aufgaben</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">Es gibt keine Aufgaben</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-600 hover:text-red-400"
              >
                Löschen
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
