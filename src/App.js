import Home from '../src/page/Home';
import BlogList from './page/BlogList';
import BlogPost from './page/BlogPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/BlogList' component={BlogList} />
        <Route path='/BlogPost' component={BlogPost} />
      </Switch>
    </Router>
  );
}

export default App;
