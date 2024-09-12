import openai
import os

# Set up the OpenAI API key from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

# Function to generate a project title using OpenAI
def generate_project_title(category, complexity):
    prompt = f"Generate a creative project title for a {complexity} project about {category}."
    
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=50
    )
    
    return response.choices[0].text.strip()

# Function to generate project content (lessons and structure) using OpenAI
def generate_project_content(title, complexity, lessons):
    prompt = f"Generate a {complexity} project plan for {title}. Include the following lessons: {', '.join(lessons)}."
    
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=1000
    )
    
    return response.choices[0].text
