import { Container, Grid, Card, Text, Title, Button } from '@mantine/core';
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
              <Text mt="md" color="dimmed">
                Learn the fundamentals of Java programming including syntax, data structures, and more.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>

            {/* Spring Boot Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Spring Boot</Title>
              <Text mt="md" color="dimmed">
                Get started with Spring Boot for building production-ready applications with ease.
              </Text>
              <Button component={Link} to="/java/spring-boot" mt="md" variant="outline">
                Explore
              </Button>
            </Card>

            {/* Quarkus Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Quarkus</Title>
              <Text mt="md" color="dimmed">
                Discover Quarkus for high-performance Java applications with a focus on Kubernetes and GraalVM.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
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
            {/* SQL Setup Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>SQL Setup</Title>
              <Text mt="md" color="dimmed">
                Guide to setting up and configuring SQL databases.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>

            {/* SQL Queries Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>SQL Queries</Title>
              <Text mt="md" color="dimmed">
                Learn to write and optimize SQL queries.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
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
            {/* MongoDB Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>MongoDB</Title>
              <Text mt="md" color="dimmed">
                Introduction to MongoDB, a popular NoSQL database.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>

            {/* NoSQL Concepts Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>NoSQL Concepts</Title>
              <Text mt="md" color="dimmed">
                Learn about NoSQL databases and their key concepts.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>

      {/* JavaScript Section */}
      <Grid spacing="md" mt="xl">
        <Grid.Col span={12}>
          <Title order={2}>JavaScript</Title>
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
              <Text mt="md" color="dimmed">
                Get started with JavaScript programming basics.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>

            {/* Advanced JavaScript Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>Advanced JavaScript</Title>
              <Text mt="md" color="dimmed">
                Explore advanced JavaScript topics and techniques.
              </Text>
              <Button mt="md" variant="outline">Explore</Button>
            </Card>


            {/* React Card */}
            <Card shadow="sm" padding="lg" style={{ flex: '1 1 300px', minWidth: 300 }}>
              <Title order={3}>React</Title>
              <Text mt="md" color="dimmed">
                Get started with React
              </Text>
              <Button component={Link} to="/javascript/react" mt="md" variant="outline">
                Explore
              </Button>
            </Card>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
