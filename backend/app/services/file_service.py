import os

# Function to create project files and save them locally
def create_project_files(content):
    project_title = content.get("title", "Untitled Project")
    lessons = content.get("lessons", [])
    
    # Project directory within the Docker volume
    project_dir = os.getenv("PROJECT_DIR", "./projects") + f"/{project_title}"
    os.makedirs(project_dir, exist_ok=True)

    project_files = []
    for lesson in lessons:
        # Create a file for each lesson
        file_path = os.path.join(project_dir, f"{lesson['title']}.md")
        with open(file_path, 'w') as f:
            f.write(lesson['content'])
        project_files.append(file_path)

    return project_files
