import React from 'react';
import ConceptDetailComponent from '../../../components/ConceptDetailComponent';

const concepts = [
  {
    title: 'Dependency Injection',
    description: `Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control), allowing Spring Boot to manage the dependencies of your application. It helps in reducing the coupling between components and promotes loose coupling.`,
    code: `@Autowired\npublic MyService myService() {\n  return new MyService();\n}`,
    language: 'java'
  },
  {
    title: 'Beans',
    description: `In Spring Boot, a Bean is an object that is managed by the Spring IoC container. Beans are created and managed by the Spring container and can be injected into other beans or components. They are typically defined using the @Component or @Bean annotations.`,
    code: `@Bean\npublic MyService myService() {\n  return new MyService();\n}`,
    language: 'java'
  },
  {
    title: 'Common Annotations',
    description: `Spring Boot provides several common annotations that are useful in different scenarios. Here are some of the most frequently used annotations:`,
    code: `@Component\n@Service\n@Repository\n@Controller\n@RestController\n@Autowired\n@Configuration\n@Value`,
    language: 'java'
  },
  {
    title: 'Autowiring',
    description: `Autowiring is a feature that allows Spring to automatically resolve dependencies between beans without requiring explicit configuration. This can be done using the @Autowired annotation.`,
    code: `@Autowired\nprivate MyService myService;`,
    language: 'java'
  },
  {
    title: 'Configuration Properties',
    description: `Spring Boot allows you to externalize configuration using properties files. You can map properties to a Java bean using the @ConfigurationProperties annotation.`,
    code: `@ConfigurationProperties(prefix = "app")\npublic class AppProperties {\n  private String name;\n  private int timeout;\n  // getters and setters\n}`,
    language: 'java'
  },
  {
    title: 'Profiles',
    description: `Spring Boot profiles provide a way to segregate parts of your application configuration and make it available only in certain environments. Profiles can be activated via the application.properties file or as a command-line parameter.`,
    code: `# application.properties\nspring.profiles.active=dev\n\n# application-dev.properties\nserver.port=8081`,
    language: 'properties'
  },
  {
    title: 'Spring Boot Starter',
    description: `Spring Boot Starters are a set of convenient dependency descriptors you can include in your application. They simplify the setup of Spring applications by providing a curated set of dependencies for various use cases.`,
    code: `dependencies {\n  implementation 'org.springframework.boot:spring-boot-starter-web'\n  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n}`,
    language: 'groovy'
  },
  {
    title: 'Actuator',
    description: `Spring Boot Actuator provides built-in endpoints to monitor and manage your application. It exposes various metrics and health information, which can be useful for monitoring and troubleshooting.`,
    code: `# application.properties\nmanagement.endpoints.web.exposure.include=health,info`,
    language: 'properties'
  },
  {
    title: 'Spring Data JPA',
    description: `Spring Data JPA simplifies data access by providing a repository abstraction layer. It eliminates the need for boilerplate code and provides CRUD operations out-of-the-box.`,
    code: `@Repository\npublic interface MyRepository extends JpaRepository<MyEntity, Long> {\n  List<MyEntity> findByName(String name);\n}`,
    language: 'java'
  },
  {
    title: 'Exception Handling',
    description: `Spring Boot provides a convenient way to handle exceptions through the use of @ControllerAdvice and @ExceptionHandler annotations. This allows you to centralize exception handling logic.`,
    code: `@ControllerAdvice\npublic class GlobalExceptionHandler {\n  @ExceptionHandler(Exception.class)\n  public ResponseEntity<String> handleException(Exception ex) {\n    return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);\n  }\n}`,
    language: 'java'
  },
  {
    title: 'Security Configuration',
    description: `Spring Boot Security allows you to configure authentication and authorization easily. You can secure your application with just a few lines of configuration using the WebSecurityConfigurerAdapter class.`,
    code: `@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n  @Override\n  protected void configure(HttpSecurity http) throws Exception {\n    http\n      .authorizeRequests()\n      .anyRequest().authenticated()\n      .and()\n      .formLogin();\n  }\n}`,
    language: 'java'
  },
];

const SpringBootConcepts = () => (
  <ConceptDetailComponent concepts={concepts} />
);

export default SpringBootConcepts;
