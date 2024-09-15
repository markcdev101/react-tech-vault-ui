// SpringBootInstallation.js
import React from 'react';
import InstallationTab from '../../../components/InstallationTab';

const SpringBootInstallation = () => {
  const sections = [
    {
      value: 'spring-initializr',
      label: 'Spring Initializr',
      language: 'text',  // Plain text for non-code sections
      content: `You can use Spring Initializr to quickly generate a Spring Boot project with the necessary dependencies.

Visit the official Spring Initializr website: https://start.spring.io

Choose the project type, language, and dependencies you want. Here’s an example configuration:

Project: Maven
Language: Java
Spring Boot Version: 2.5.x
Dependencies: Spring Web, Spring Security

After selecting the necessary options, click on Generate to download the zip file.

Unzip the file and navigate to the project directory:
unzip demo.zip
cd demo

You can now open the project in your IDE and build it using Maven or Gradle.`
    },
    {
      value: 'command-line',
      label: 'Command Line',
      language: 'bash',  // Bash for command line instructions
      content: `# To create and install a Spring Boot project using the command line, run the following commands:

curl -s https://start.spring.io/starter.zip \\
-d dependencies=web,security \\
-d name=myapp \\
-o myapp.zip

# Once downloaded, unzip the project and navigate to the project folder:
unzip myapp.zip
cd myapp

# To build and run your project, use the following command:
./mvnw spring-boot:run`
    },
    {
      value: 'ide',
      label: 'IDE Setup',
      language: 'text',  // Plain text for instructions
      content: `You can integrate Spring Boot easily with popular IDEs like IntelliJ IDEA or Eclipse. Follow these steps for the setup:

In IntelliJ IDEA:
- Go to File > New > Project and select Spring Initializr.
- Fill in the project details such as Group, Artifact, and dependencies (like Spring Web and Spring Security).
- Click Next and finish the setup.

In Eclipse:
- Install the Spring Tools 4 plugin from the Eclipse Marketplace.
- After installation, go to File > New > Spring Starter Project.
- Configure your project, add the necessary dependencies, and finish the setup.

You can now start developing your Spring Boot application in your preferred IDE.`
    },
  ];

  return (
    <div>
      <InstallationTab sections={sections} />
    </div>
  );
};

export default SpringBootInstallation;
