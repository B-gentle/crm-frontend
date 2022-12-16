import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/forms/Login';
import {Routes, Route} from 'react-router-dom'
import Register from './components/forms/Register';
import Dashboard from './components/Dashboard/Dashboard';
import RegisterComplaint from './components/Dashboard/pages/RegisterComplaint';
import PageNotFound from './components/pageNotFound/PageNotFound';
import DashboardHome from './components/Dashboard/DashboardHome';
import Request from './components/Dashboard/pages/Request';
import ToDoList from './components/Dashboard/pages/ToDoList';

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='signup' element={<Register/>} />
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index element={<DashboardHome/>}/>
          <Route path='register-complains' element={<RegisterComplaint/>} />
          <Route path='request'element={<Request/>} />
          <Route path='to-do-list' element={<ToDoList/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
