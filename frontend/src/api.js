import axios from 'axios';

// Function to call the backend API to generate a project
export const generateProject = async (data) => {
  try {
    const response = await axios.post('/api/generate-project', data);
    return response.data;
  } catch (error) {
    console.error('Error generating project:', error);
    throw error;
  }
};
