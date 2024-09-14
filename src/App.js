import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SpringBootIndex from './pages/Java/SpringBoot/Index';
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">
      {/* Wrap everything inside the Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java/spring-boot" element={<SpringBootIndex />} />
          {/* You can add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
