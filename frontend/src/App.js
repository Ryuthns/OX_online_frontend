
import './App.css';
import Game from "./Game"
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Switch>
              <Route exact path={["/", "/ox"]} component={Game} />
              <Route exact path="/login" component={Login} />
              {/* <Route path="/todo/:id" component={Todo} /> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
