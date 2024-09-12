import React, { useState } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectStatus from './components/ProjectStatus';

function App() {
  const [projectFiles, setProjectFiles] = useState([]);
  
  // This function will update the project status once files are generated
  const handleProjectGenerated = (files) => {
    setProjectFiles(files);
  };

  return (
    <div className="App">
      <h1>Creator AI - Project Generation</h1>
      {projectFiles.length === 0 ? (
        <ProjectForm onProjectGenerated={handleProjectGenerated} />
      ) : (
        <ProjectStatus files={projectFiles} />
      )}
    </div>
  );
}

export default App;
