# Keycloak POC: Production-Ready Fullstack Demo

## Overview
This project is a proof-of-concept (POC) designed to explore and demonstrate:
- Integration of [Keycloak](https://www.keycloak.org/) for authentication and authorization
- Modern frontend-backend architecture
- Production-grade code structure and best practices
- Automated CI/CD pipelines using GitHub Actions
- Containerization and deployment readiness
- **Cloud Deployment with [Render](https://render.com/)**: Experimenting with cloud-based deployments for both frontend and backend services

## Project Structure
- **backend/**: Spring Boot application serving as the API and business logic layer, integrated with Keycloak for security.
- **frontend/**: Angular application providing the user interface, with Keycloak-based authentication flows.
- **keycloak/**: Docker resources for running a local Keycloak instance for development and testing.

## Key Features
- **Keycloak Integration**: Secure authentication and role-based access control across the stack.
- **Production-Ready Patterns**: Clean code, modular structure, and best practices for maintainability and scalability.
- **CI/CD with GitHub Actions**: Automated build, test, and deployment pipelines for both frontend and backend.
- **Containerization**: Docker support for all services, enabling easy local development and production deployment.
- **Render Deployment**: Example configuration and guidance for deploying services to Render cloud platform.

## Getting Started
1. **Clone the repository**
2. **Start Keycloak**: Use the provided Dockerfile in the `keycloak/` directory.
3. **Run Backend**: Build and start the Spring Boot app in `backend/`.
4. **Run Frontend**: Start the Angular app in `frontend/`.
5. **CI/CD**: Review GitHub Actions workflows for automated build and deployment steps.
6. **Deploy to Render**: Follow the Render deployment instructions in the project for cloud hosting.

## Goals
- Serve as a reference for production-ready fullstack applications
- Demonstrate secure authentication with Keycloak
- Showcase automated CI/CD and deployment best practices
- Provide a template for deploying to cloud platforms like Render

---
This project is intended for learning, experimentation, and as a template for real-world deployments.
