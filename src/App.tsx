import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import TasksScreen from './tasks-screen/TasksScreen';
import NewTaskForm from './tasks-screen/NewTaskForm';
import AboutScreen from './AboutScreen';
import PageNotFound from './PageNotFound';

function App() : JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Sidebar} exact></Route>
        <Router>
          <Route path='/tasks' component={TasksScreen}></Route>
          <Route path='/tasks/modify' component={NewTaskForm}></Route>
        </Router>
        <Route path='/about' component={AboutScreen}></Route>
        <Route path='' component={PageNotFound}></Route>
      </Switch>
    </Router>      
  );
}

export default App;
