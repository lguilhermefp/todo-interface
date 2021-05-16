import HomeScreen from './components/HomeScreen';
import TasksScreen from './components/TasksScreen';
import Task from './tasks/Task';
import NewTaskForm from './tasks/NewTaskForm';
import ModifyTaskForm from './tasks/ModifyTaskForm';
import PageNotFound from './components/PageNotFound';
import TaskList from './tasks/TaskList';
import store from './store/state';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() : JSX.Element {
  return (
    <Provider store={store}>
              <TaskList />
        <Router>
          <Switch>
            <Route path='/api/' component={HomeScreen}></Route>
            <Route path='/api/tasks/' component={TasksScreen}></Route>
            <Route path='/api/tasks/new/' component={NewTaskForm}></Route>
            <Route path='/api/tasks/modify/' component={ModifyTaskForm}></Route>
            <Route path='/api/tasks/:id/' component={Task}></Route>
            <Route path='' component={PageNotFound}></Route>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
