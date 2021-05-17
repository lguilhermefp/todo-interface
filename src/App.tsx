import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import TasksScreen from './tasks-screen/TasksScreen';
import PageNotFound from './PageNotFound';

function App() : JSX.Element {
  return (
    <Router>
        <Route path='/api/' component={Sidebar}></Route>
        <Route path='/api/tasks/' component={TasksScreen}></Route>
        {/*<Route path='/api/tasks/:id/' component={Task}></Route>*/}
        <Route path='' component={PageNotFound}></Route>
    </Router>      
  );
}

export default App;
