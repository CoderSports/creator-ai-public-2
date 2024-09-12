from flask import Flask
from app.routes.project_routes import project_bp

def create_app():
    app = Flask(__name__)

    # Register blueprints (routes)
    app.register_blueprint(project_bp)

    return app
