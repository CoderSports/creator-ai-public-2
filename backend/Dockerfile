# Use a lightweight Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code
COPY . .

# Set environment variables
ENV FLASK_ENV=development

# Expose the port Flask runs on
EXPOSE 5000

# Run the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]
