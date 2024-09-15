import { Container, Grid, Card, Text, Title, Button, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <Grid justify="center">
        <Grid.Col span={12}>
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <Title order={1}>Welcome to TechVault</Title>
            <Text size="lg" color="dimmed">
              Your comprehensive guide to mastering technology.
            </Text>
            <Button mt="md" size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </Grid.Col>
      </Grid>

      {/* Java Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>Java</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid spacing="md"
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* Core Java Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Core Java</Title>
              <Image
                src="/img/HomePage/java-logo.png"
                height={160}
                alt="Core Java"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Dive into the essentials of Core Java, including language fundamentals, data structures, and object-oriented programming principles.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* Spring Boot Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Spring Boot</Title>
              <Card.Section>
                <Image
                  src="/img/HomePage/spring-boot-logo.png"
                  height={160}
                  alt="Spring Boot"
                  style={{ objectFit: 'contain', width: '100%' }}
                />
              </Card.Section>
              <Text mt="md" color="dimmed">
                Get started with Spring Boot to simplify the development of production-ready Spring applications with minimal configuration.
              </Text>
              <Button component={Link} to="/java/spring-boot" mt="md" variant="outline">
                Explore
              </Button>
            </Card>

            {/* Quarkus Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Quarkus</Title>
              <Image
                src="/img/HomePage/quarkus-logo.png"
                height={160}
                alt="Quarkus"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Discover Quarkus for developing high-performance Java applications optimized for Kubernetes and GraalVM, with a fast and efficient development experience.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* JavaScript - FrontEnd Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>JavaScript - FrontEnd</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* JavaScript Basics Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>JavaScript Basics</Title>
              <Card.Section>
                <Image
                  src="/img/HomePage/javascript-logo.png"
                  height={160}
                  alt="JavaScript"
                  style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
                />
              </Card.Section>
              <Text mt="md" color="dimmed">
                Start learning JavaScript basics, including syntax, functions, and DOM manipulation, to build dynamic web applications.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* React Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>React</Title>
              <Card.Section>
                <Image
                  src="/img/HomePage/react-logo.png"
                  height={160}
                  alt="React"
                  style={{ objectFit: 'contain', width: '100%' }}
                />
              </Card.Section>
              <Text mt="md" color="dimmed">
                Learn the fundamentals of React for building interactive user interfaces with a component-based architecture.
              </Text>
              <Button component={Link} to="/javascript/react" mt="md" variant="outline">
                Explore
              </Button>
            </Card>

            {/* Angular Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Angular</Title>
              <Card.Section>
                <Image
                  src="/img/HomePage/angular-logo.png"
                  height={160}
                  alt="Angular"
                  style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
                />
              </Card.Section>
              <Text mt="md" color="dimmed">
                Get started with Angular, a powerful framework for building scalable and maintainable single-page applications.
              </Text>
              <Button component={Link} to="/javascript/angular" mt="md" variant="outline" disabled>
                Explore
              </Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* JavaScript - Backend Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>JavaScript - Backend</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* Node.js Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Node.js</Title>
              <Image
                src="/img/HomePage/node.js-logo.png"
                height={160}
                alt="Node.js"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Build scalable network applications with Node.js.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
             {/* Node.js Card */}
             <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Express.js</Title>
              <Image
                src="/img/HomePage/express.js-logo.png"
                height={160}
                alt="Node.js"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Express is a minimal and flexible Node.js web application framework that provides a robust of features
                for web and mobile applications.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* Cloud Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>Cloud</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* AWS Setup Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Amazon Web Services</Title>
              <Image
                src="/img/HomePage/aws-logo.png"
                height={160}
                alt="AWS"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Explore Amazon Web Services (AWS) for cloud computing solutions, including services for computing, storage, and networking.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* Digital Ocean Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Digital Ocean</Title>
              <Image
                src="/img/HomePage/digital-ocean-logo.png"
                height={160}
                alt="Digital Ocean"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Learn about Digital Ocean, providing scalable cloud services with simplicity and cost-efficiency for developers.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* SQL Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>SQL</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* SQL Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Structured Query Language - SQL</Title>
              <Text mt="md" color="dimmed">
                Comprehensive guide to setting up, configuring, and working with SQL databases, including data manipulation and querying techniques.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* MySQL Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>MySQL</Title>
              <Image
                src="/img/HomePage/mysql-logo.png"
                height={160}
                alt="MySQL"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Discover MySQL, a widely-used open-source relational database management system for various applications.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* NoSQL Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>NoSQL</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* NoSQL Concepts Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Not Only SQL - NoSQL</Title>
              <Text mt="md" color="dimmed">
                Learn about NoSQL databases, their types, and the key concepts that differentiate them from traditional SQL databases.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>

            {/* MongoDB Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>MongoDB</Title>
              <Image
                src="/img/HomePage/mongodb-logo.png"
                height={160}
                alt="MongoDB"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Introduction to MongoDB, a popular NoSQL database known for its flexibility, scalability, and ease of use.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* Testing Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>Automated Testing</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* JUnit Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>JUnit 5</Title>
              <Image
                src="/img/HomePage/junit5-logo.png"
                height={160}
                alt="JUnit 5"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Learn JUnit 5 for writing and executing unit tests in Java, focusing on modern features and best practices.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* Selenium Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Selenium</Title>
              <Image
                src="/img/HomePage/selenium-logo.png"
                height={160}
                alt="Selenium"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Introduction to Selenium for automated web application testing across different browsers and platforms.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* MUnit Card (MuleSoft) */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>MUnit</Title>
              <Image
                src="/img/HomePage/mulesoft-logo.png"
                height={160}
                alt="MUnit"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Explore MUnit for testing MuleSoft applications, focusing on integration and unit testing within the Mule ecosystem.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* API Development Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>API Development</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* MuleSoft Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>MuleSoft</Title>
              <Image
                src="/img/HomePage/mulesoft-logo.png"
                height={160}
                alt="MuleSoft"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Learn how to build and manage APIs using MuleSoft's Anypoint Platform, covering integration and API management.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* SpringBoot Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Spring Boot</Title>
              <Image
                src="/img/HomePage/spring-boot-logo.png"
                height={160}
                alt="Spring Boot"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Explore API development with Spring Boot, focusing on building robust RESTful services and microservices.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* Camel Quarkus Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Camel Quarkus</Title>
              <Image
                src="/img/HomePage/camel-quarkus-logo.png"
                height={160}
                alt="Camel Quarkus"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Discover Camel Quarkus for integrating microservices and APIs with a focus on lightweight and high-performance development.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>
      {/* GIT Repository Services Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>GIT Repository Services</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* Bitbucket Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Bitbucket</Title>
              <Image
                src="/img/HomePage/bitbucket-logo.png"
                height={160}
                alt="Bitbucket"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Manage and collaborate on code with Bitbucket.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* GitHub Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>GitHub</Title>
              <Image
                src="/img/HomePage/github-logo.png"
                height={160}
                alt="GitHub"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Host and review code with GitHub.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* GitLab Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>GitLab</Title>
              <Image
                src="/img/HomePage/gitlab-logo.png"
                height={160}
                alt="GitLab"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Comprehensive DevOps platform with GitLab.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* Operating Systems Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>Operating Systems</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* Windows Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Windows</Title>
              <Image
                src="/img/HomePage/windows-logo.png"
                height={160}
                alt="Windows"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Learn about Windows operating systems.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* Linux Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Linux</Title>
              <Image
                src="/img/HomePage/linux-logo.png"
                height={160}
                alt="Linux"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Explore the world of Linux operating systems.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* Container Services Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>Container Services</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* Docker Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Docker</Title>
              <Image
                src="/img/HomePage/docker-logo.png"
                height={160}
                alt="Docker"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Get started with Docker for containerization.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
             {/* Docker Card */}
             <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Kubernetes</Title>
              <Image
                src="/img/HomePage/kubernetes-logo.png"
                height={160}
                alt="Kubernetes"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Get started with Docker for containerization.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* CICD Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>CI/CD</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid
            sx={(theme) => ({
              display: 'flex',
              gap: theme.spacing.md,
              overflowX: 'auto',
              padding: '1rem 0',
            })}
          >
            {/* Jenkins Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Jenkins</Title>
              <Image
                src="/img/HomePage/jenkins-logo.png"
                height={160}
                alt="Jenkins"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Automate your build and deployment processes with Jenkins.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>

            {/* Bamboo Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Bamboo</Title>
              <Image
                src="/img/HomePage/bamboo-logo.png"
                height={160}
                alt="Bamboo"
                style={{ objectFit: 'contain', width: '100%', filter: 'grayscale(100%)', opacity: 0.5, }}
              />
              <Text mt="md" color="dimmed">
                Manage your build and release pipelines with Bamboo.
              </Text>
              <Button mt="md" variant="outline" disabled>Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      

    </Container>
  );
}
