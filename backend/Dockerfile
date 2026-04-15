# Stage 1: Build JAR with Gradle
FROM gradle:8.5-jdk17 AS build
WORKDIR /app

# Copy Gradle files first for caching
COPY build.gradle.kts settings.gradle.kts gradlew ./
COPY gradle ./gradle

# Copy source code
COPY src ./src

# Build the JAR
RUN ./gradlew clean build -x test

# Stage 2: Run JAR
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy the JAR from build stage
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8082
ENTRYPOINT ["java","-jar","keycloak-0.0.1-SNAPSHOT.jar"]