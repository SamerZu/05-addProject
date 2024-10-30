export default function SideBar({
  onNewProjektClick,
  projects,
  handleSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="max-w-md min-h-screen rounded-r-lg py-12 px-10 bg-gray-700">
      <h1 className="text-2xl pb-8 text-white font-bold">DEINE PROJEKTE </h1>
      <button
        className=" bg-gray-600 py-3 px-3 mb-10 rounded-lg text-white hover:bg-slate-500"
        onClick={onNewProjektClick}
      >
        + Projekt hinzufügen
      </button>
      <ul>
        {projects.map((project) => {
          let cssClass =
            "w-full h-8 mb-4 text-left px-2 py-1 rounded-sm bg-slate-600  hover:bg-slate-500 ";
          if (project.id === selectedProjectId) {
            cssClass += " bg-slate-500 text-stone-200";
          } else {
            cssClass += " text-stone-300";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => handleSelectProject(project.id)}
                className={cssClass}
              >
                {project.titel}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
