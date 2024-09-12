from flask import Blueprint, request, jsonify
from app.services.openai_service import generate_project_title, generate_project_content
from app.services.file_service import create_project_files
import logging

# Blueprint setup
project_bp = Blueprint('project', __name__)
logging.basicConfig(level=logging.INFO)

@project_bp.route('/api/generate-project', methods=['POST'])
def generate_project():
    data = request.json
    logging.info(f"Received project request: {data}")
    
    # Extract data from request
    project_title = data.get("title")
    complexity = data.get("complexity", "medium")
    category = data.get("category", "general")

    # If no title is provided, generate one
    if not project_title:
        project_title = generate_project_title(category, complexity)

    lessons = data.get("lessons", ["Lesson 1", "Lesson 2"])

    # Generate project content using OpenAI
    content = generate_project_content(project_title, complexity, lessons)
    project_files = create_project_files(content)

    return jsonify({
        "message": f"Project '{project_title}' generated successfully.",
        "files": project_files
    })
