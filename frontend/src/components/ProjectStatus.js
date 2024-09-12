import React from 'react';

function ProjectStatus({ files }) {
  return (
    <div>
      <h2>Project Generated Successfully</h2>
      <p>The following files were generated for your project:</p>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a href={file} download>{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectStatus;
