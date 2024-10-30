import NewPorject from "./components/NewPorject.jsx";
import NoProject from "./components/NoProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import SideBar from "./components/SideBar.jsx";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Prop Drillig Problem
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // Prop Drillig Problem
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleOnStartAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeletePoject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeletePoject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewPorject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onNewProjektClick={handleOnStartAddProject} />;
  }

  return (
    <>
      <h1 className="my-10 pb-3 text-center text-gray-700 text-3xl font-bold">
        Deine Projekte in einem Platz
      </h1>
      <div className="flex flex-row">
        <SideBar
          onNewProjektClick={handleOnStartAddProject}
          projects={projectsState.projects}
          handleSelectProject={handleSelectProject}
        />

        {content}
      </div>
    </>
  );
}

export default App;
