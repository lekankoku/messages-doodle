FROM openjdk:17-jdk-slim-buster


WORKDIR /app

# Copy Gradle wrapper files and build file
COPY gradlew gradlew.bat ./
COPY gradle/wrapper/ gradle/wrapper/
COPY build.gradle settings.gradle* ./


# Resolve dependencies
RUN ./gradlew dependencies

EXPOSE 8080

# Copy the rest of the application
COPY src ./src

CMD ["./gradlew", "bootRun"]