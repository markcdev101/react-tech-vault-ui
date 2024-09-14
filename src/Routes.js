import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
// import CoreJava from './pages/Java/CoreJava/Index';
import SpringBoot from './pages/Java/SpringBoot/Index';
// import Quarkus from './pages/Java/Quarkus/Index';
// import SQLSetup from './pages/SQL/Setup';
// import SQLQueries from './pages/SQL/Queries';
// import MongoDB from './pages/NoSQL/MongoDB';
// import NoSQLConcepts from './pages/NoSQL/Concepts';
// import JavaScriptBasics from './pages/JavaScript/Basics';
// import AdvancedJavaScript from './pages/JavaScript/Advanced';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/java/core-java" component={CoreJava} /> */}
        <Route path="/java/spring-boot" component={SpringBoot} />
        {/* <Route path="/java/quarkus" component={Quarkus} />
        <Route path="/sql/setup" component={SQLSetup} />
        <Route path="/sql/queries" component={SQLQueries} />
        <Route path="/nosql/mongodb" component={MongoDB} />
        <Route path="/nosql/concepts" component={NoSQLConcepts} />
        <Route path="/javascript/basics" component={JavaScriptBasics} />
        <Route path="/javascript/advanced" component={AdvancedJavaScript} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
