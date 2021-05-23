import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import TasksScreen from './tasks-screen/TasksScreen';
import NewTaskForm from './tasks-screen/NewTaskForm';
import UpdateTaskForm from './tasks-screen/UpdateTaskForm';
import AboutScreen from './AboutScreen';
import PageNotFound from './PageNotFound';

function App() : JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Sidebar} exact></Route>
        <Route>
          <Route path='/tasks' component={TasksScreen}></Route>
          <Route path='/tasks/create' component={NewTaskForm}></Route>
          <Route path='/tasks/update' component={UpdateTaskForm}></Route>
          <Route path='/about' component={AboutScreen}></Route>
        </Route>
        <Route path='' component={PageNotFound}></Route>
      </Switch>
    </Router>      
  );
}

export default App;
