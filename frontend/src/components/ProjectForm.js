import React, { useState } from 'react';
import { generateProject } from '../api';

function ProjectForm({ onProjectGenerated }) {
  const [title, setTitle] = useState('');
  const [complexity, setComplexity] = useState('medium');
  const [lessons, setLessons] = useState(['Lesson 1']);
  const [useChatGPT, setUseChatGPT] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = { title, complexity, lessons, useChatGPT };
      const response = await generateProject(data);
      onProjectGenerated(response.files);
    } catch (err) {
      console.error(err);
      setError('Failed to generate project.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Project Title:
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          disabled={useChatGPT} 
        />
      </label>
      <br />
      <label>
        Complexity:
        <select value={complexity} onChange={(e) => setComplexity(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <br />
      <label>
        Lessons (comma-separated):
        <input 
          type="text" 
          value={lessons.join(', ')} 
          onChange={(e) => setLessons(e.target.value.split(', '))} 
        />
      </label>
      <br />
      <label>
        Use ChatGPT to generate title:
        <input 
          type="checkbox" 
          checked={useChatGPT} 
          onChange={() => setUseChatGPT(!useChatGPT)} 
        />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Project'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default ProjectForm;
