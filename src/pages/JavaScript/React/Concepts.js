import React from 'react';
import ConceptDetailComponent from "../../../components/ConceptDetailComponent"

const concepts = [
  {
    title: 'Components',
    description: `Components are the building blocks of a React application. They can be functional or class-based and are used to create reusable pieces of UI. Components can also accept props and maintain internal state.`,
    code: `function MyComponent(props) {\n  return <div>Hello, {props.name}!</div>;\n}`,
    language: 'javascript'
  },
  {
    title: 'State Management',
    description: `State management refers to handling the state of a component or application. In React, state is used to manage data that can change over time and affect the rendering of components. React provides a built-in \`useState\` hook for functional components to manage state.`,
    code: `const [count, setCount] = useState(0);\n\nreturn (\n  <div>\n    <p>You clicked {count} times</p>\n    <button onClick={() => setCount(count + 1)}>Click me</button>\n  </div>\n);`,
    language: 'javascript'
  },
  {
    title: 'Props',
    description: `Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and allow for the customization of child components based on the data provided by the parent.`,
    code: `function Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n<Greeting name="Alice" />`,
    language: 'javascript'
  },
  {
    title: 'Lifecycle Methods',
    description: `Lifecycle methods are hooks in class components that allow you to run code at specific points in a component's lifecycle. Common lifecycle methods include \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`. For functional components, React provides the \`useEffect\` hook to handle side effects.`,
    code: `useEffect(() => {\n  // Code to run on mount\n  return () => {\n    // Code to run on unmount\n  };\n}, []);`,
    language: 'javascript'
  },
  {
    title: 'Context API',
    description: `The Context API provides a way to share state across multiple components without passing props through every level of the component tree. It is used for global state management and can simplify the process of passing data down through components.`,
    code: `const MyContext = createContext();\n\nfunction App() {\n  const [value, setValue] = useState('Hello');\n\n  return (\n    <MyContext.Provider value={value}>\n      <MyComponent />\n    </MyContext.Provider>\n  );\n}\n\nfunction MyComponent() {\n  const contextValue = useContext(MyContext);\n  return <div>{contextValue}</div>;\n}`,
    language: 'javascript'
  },
  {
    title: 'Hooks',
    description: `Hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are \`useState\`, \`useEffect\`, \`useContext\`, and \`useReducer\`. Hooks enable you to manage component state, side effects, and context without writing class components.`,
    code: `const [state, dispatch] = useReducer(reducer, initialState);\n\nreturn (\n  <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>\n);`,
    language: 'javascript'
  },
];


const ReactConcepts = () => (
  <ConceptDetailComponent concepts={concepts} />
);

export default ReactConcepts;
