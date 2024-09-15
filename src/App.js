// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SpringBootIndex from './pages/Java/SpringBoot/Index';
import Layout from './components/layout/Layout';
import ReactIndex from './pages/JavaScript/React/Index';
import '@mantine/core/styles.css';
import GitHubIndex from './pages/GitRepositories/GitHub/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/java/spring-boot" element={<SpringBootIndex />} />
            <Route path="/javascript/react" element={<ReactIndex />} />
            <Route path="/gitrepositories/github" element={<GitHubIndex />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
